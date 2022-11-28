# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { BatchDeleteBuildsRequest, BatchDeleteBuildsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchDeleteBuildsRequest = {
  headers: {
    xAmzAlgorithm: "illum",
    xAmzContentSha256: "eum",
    xAmzCredential: "quo",
    xAmzDate: "et",
    xAmzSecurityToken: "non",
    xAmzSignature: "omnis",
    xAmzSignedHeaders: "tempora",
    xAmzTarget: "CodeBuild_20161006.BatchDeleteBuilds",
  },
  request: {
    ids: [
      "fugit",
      "quam",
    ],
  },
};

sdk.sdk.batchDeleteBuilds(req).then((res: BatchDeleteBuildsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchDeleteBuilds` - Deletes one or more builds.
* `batchGetBuildBatches` - Retrieves information about one or more batch builds.
* `batchGetBuilds` - Gets information about one or more builds.
* `batchGetProjects` - Gets information about one or more build projects.
* `batchGetReportGroups` -  Returns an array of report groups. 
* `batchGetReports` -  Returns an array of reports. 
* `createProject` - Creates a build project.
* `createReportGroup` -  Creates a report group. A report group contains a collection of reports. 
* `createWebhook` - <p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
* `deleteBuildBatch` - Deletes a batch build.
* `deleteProject` -  Deletes a build project. When you delete a project, its builds are not deleted. 
* `deleteReport` -  Deletes a report. 
* `deleteReportGroup` - Deletes a report group. Before you delete a report group, you must delete its reports. 
* `deleteResourcePolicy` -  Deletes a resource policy that is identified by its resource ARN. 
* `deleteSourceCredentials` -  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 
* `deleteWebhook` - For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
* `describeCodeCoverages` - Retrieves one or more code coverage reports.
* `describeTestCases` -  Returns a list of details about test cases for a report. 
* `getReportGroupTrend` - Analyzes and accumulates test report values for the specified test reports.
* `getResourcePolicy` -  Gets a resource policy that is identified by its resource ARN. 
* `importSourceCredentials` -  Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 
* `invalidateProjectCache` - Resets the cache for a project.
* `listBuildBatches` - Retrieves the identifiers of your build batches in the current region.
* `listBuildBatchesForProject` - Retrieves the identifiers of the build batches for a specific project.
* `listBuilds` - Gets a list of build IDs, with each build ID representing a single build.
* `listBuildsForProject` - Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.
* `listCuratedEnvironmentImages` - Gets information about Docker images that are managed by CodeBuild.
* `listProjects` - Gets a list of build project names, with each build project name representing a single build project.
* `listReportGroups` -  Gets a list ARNs for the report groups in the current Amazon Web Services account. 
* `listReports` -  Returns a list of ARNs for the reports in the current Amazon Web Services account. 
* `listReportsForReportGroup` -  Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 
* `listSharedProjects` -  Gets a list of projects that are shared with other Amazon Web Services accounts or users. 
* `listSharedReportGroups` -  Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 
* `listSourceCredentials` -  Returns a list of <code>SourceCredentialsInfo</code> objects. 
* `putResourcePolicy` -  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 
* `retryBuild` - Restarts a build.
* `retryBuildBatch` - Restarts a failed batch build. Only batch builds that have failed can be retried.
* `startBuild` - Starts running a build.
* `startBuildBatch` - Starts a batch build for a project.
* `stopBuild` - Attempts to stop running a build.
* `stopBuildBatch` - Stops a running batch build.
* `updateProject` - Changes the settings of a build project.
* `updateProjectVisibility` - <p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>
* `updateReportGroup` -  Updates a report group. 
* `updateWebhook` - <p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
