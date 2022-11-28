# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchDeleteBuildsRequest{
        Headers: operations.BatchDeleteBuildsHeaders{
            XAmzAlgorithm: "illum",
            XAmzContentSha256: "eum",
            XAmzCredential: "quo",
            XAmzDate: "et",
            XAmzSecurityToken: "non",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "tempora",
            XAmzTarget: "CodeBuild_20161006.BatchDeleteBuilds",
        },
        Request: shared.BatchDeleteBuildsInput{
            Ids: []string{
                "fugit",
                "quam",
            },
        },
    }
    
    res, err := s.Sdk.BatchDeleteBuilds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteBuildsOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchDeleteBuilds` - Deletes one or more builds.
* `BatchGetBuildBatches` - Retrieves information about one or more batch builds.
* `BatchGetBuilds` - Gets information about one or more builds.
* `BatchGetProjects` - Gets information about one or more build projects.
* `BatchGetReportGroups` -  Returns an array of report groups. 
* `BatchGetReports` -  Returns an array of reports. 
* `CreateProject` - Creates a build project.
* `CreateReportGroup` -  Creates a report group. A report group contains a collection of reports. 
* `CreateWebhook` - <p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
* `DeleteBuildBatch` - Deletes a batch build.
* `DeleteProject` -  Deletes a build project. When you delete a project, its builds are not deleted. 
* `DeleteReport` -  Deletes a report. 
* `DeleteReportGroup` - Deletes a report group. Before you delete a report group, you must delete its reports. 
* `DeleteResourcePolicy` -  Deletes a resource policy that is identified by its resource ARN. 
* `DeleteSourceCredentials` -  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 
* `DeleteWebhook` - For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
* `DescribeCodeCoverages` - Retrieves one or more code coverage reports.
* `DescribeTestCases` -  Returns a list of details about test cases for a report. 
* `GetReportGroupTrend` - Analyzes and accumulates test report values for the specified test reports.
* `GetResourcePolicy` -  Gets a resource policy that is identified by its resource ARN. 
* `ImportSourceCredentials` -  Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 
* `InvalidateProjectCache` - Resets the cache for a project.
* `ListBuildBatches` - Retrieves the identifiers of your build batches in the current region.
* `ListBuildBatchesForProject` - Retrieves the identifiers of the build batches for a specific project.
* `ListBuilds` - Gets a list of build IDs, with each build ID representing a single build.
* `ListBuildsForProject` - Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.
* `ListCuratedEnvironmentImages` - Gets information about Docker images that are managed by CodeBuild.
* `ListProjects` - Gets a list of build project names, with each build project name representing a single build project.
* `ListReportGroups` -  Gets a list ARNs for the report groups in the current Amazon Web Services account. 
* `ListReports` -  Returns a list of ARNs for the reports in the current Amazon Web Services account. 
* `ListReportsForReportGroup` -  Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 
* `ListSharedProjects` -  Gets a list of projects that are shared with other Amazon Web Services accounts or users. 
* `ListSharedReportGroups` -  Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 
* `ListSourceCredentials` -  Returns a list of <code>SourceCredentialsInfo</code> objects. 
* `PutResourcePolicy` -  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 
* `RetryBuild` - Restarts a build.
* `RetryBuildBatch` - Restarts a failed batch build. Only batch builds that have failed can be retried.
* `StartBuild` - Starts running a build.
* `StartBuildBatch` - Starts a batch build for a project.
* `StopBuild` - Attempts to stop running a build.
* `StopBuildBatch` - Stops a running batch build.
* `UpdateProject` - Changes the settings of a build project.
* `UpdateProjectVisibility` - <p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>
* `UpdateReportGroup` -  Updates a report group. 
* `UpdateWebhook` - <p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
