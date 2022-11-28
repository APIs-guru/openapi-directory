# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BatchDeleteBuildsRequest(
    headers=operations.BatchDeleteBuildsHeaders(
        x_amz_algorithm="illum",
        x_amz_content_sha256="eum",
        x_amz_credential="quo",
        x_amz_date="et",
        x_amz_security_token="non",
        x_amz_signature="omnis",
        x_amz_signed_headers="tempora",
        x_amz_target="CodeBuild_20161006.BatchDeleteBuilds",
    ),
    request=shared.BatchDeleteBuildsInput(
        ids=[
            "fugit",
            "quam",
        ],
    ),
)
    
res = s.sdk.batch_delete_builds(req)

if res.batch_delete_builds_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_delete_builds` - Deletes one or more builds.
* `batch_get_build_batches` - Retrieves information about one or more batch builds.
* `batch_get_builds` - Gets information about one or more builds.
* `batch_get_projects` - Gets information about one or more build projects.
* `batch_get_report_groups` -  Returns an array of report groups. 
* `batch_get_reports` -  Returns an array of reports. 
* `create_project` - Creates a build project.
* `create_report_group` -  Creates a report group. A report group contains a collection of reports. 
* `create_webhook` - <p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
* `delete_build_batch` - Deletes a batch build.
* `delete_project` -  Deletes a build project. When you delete a project, its builds are not deleted. 
* `delete_report` -  Deletes a report. 
* `delete_report_group` - Deletes a report group. Before you delete a report group, you must delete its reports. 
* `delete_resource_policy` -  Deletes a resource policy that is identified by its resource ARN. 
* `delete_source_credentials` -  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 
* `delete_webhook` - For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
* `describe_code_coverages` - Retrieves one or more code coverage reports.
* `describe_test_cases` -  Returns a list of details about test cases for a report. 
* `get_report_group_trend` - Analyzes and accumulates test report values for the specified test reports.
* `get_resource_policy` -  Gets a resource policy that is identified by its resource ARN. 
* `import_source_credentials` -  Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 
* `invalidate_project_cache` - Resets the cache for a project.
* `list_build_batches` - Retrieves the identifiers of your build batches in the current region.
* `list_build_batches_for_project` - Retrieves the identifiers of the build batches for a specific project.
* `list_builds` - Gets a list of build IDs, with each build ID representing a single build.
* `list_builds_for_project` - Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.
* `list_curated_environment_images` - Gets information about Docker images that are managed by CodeBuild.
* `list_projects` - Gets a list of build project names, with each build project name representing a single build project.
* `list_report_groups` -  Gets a list ARNs for the report groups in the current Amazon Web Services account. 
* `list_reports` -  Returns a list of ARNs for the reports in the current Amazon Web Services account. 
* `list_reports_for_report_group` -  Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 
* `list_shared_projects` -  Gets a list of projects that are shared with other Amazon Web Services accounts or users. 
* `list_shared_report_groups` -  Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 
* `list_source_credentials` -  Returns a list of <code>SourceCredentialsInfo</code> objects. 
* `put_resource_policy` -  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 
* `retry_build` - Restarts a build.
* `retry_build_batch` - Restarts a failed batch build. Only batch builds that have failed can be retried.
* `start_build` - Starts running a build.
* `start_build_batch` - Starts a batch build for a project.
* `stop_build` - Attempts to stop running a build.
* `stop_build_batch` - Stops a running batch build.
* `update_project` - Changes the settings of a build project.
* `update_project_visibility` - <p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>
* `update_report_group` -  Updates a report group. 
* `update_webhook` - <p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
