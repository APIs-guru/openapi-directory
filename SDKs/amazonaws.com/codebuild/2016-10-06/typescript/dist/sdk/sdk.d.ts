import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://codebuild.{region}.amazonaws.com", "https://codebuild.{region}.amazonaws.com", "http://codebuild.{region}.amazonaws.com.cn", "https://codebuild.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * batchDeleteBuilds - Deletes one or more builds.
    **/
    batchDeleteBuilds(req: operations.BatchDeleteBuildsRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteBuildsResponse>;
    /**
     * batchGetBuildBatches - Retrieves information about one or more batch builds.
    **/
    batchGetBuildBatches(req: operations.BatchGetBuildBatchesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetBuildBatchesResponse>;
    /**
     * batchGetBuilds - Gets information about one or more builds.
    **/
    batchGetBuilds(req: operations.BatchGetBuildsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetBuildsResponse>;
    /**
     * batchGetProjects - Gets information about one or more build projects.
    **/
    batchGetProjects(req: operations.BatchGetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetProjectsResponse>;
    /**
     * batchGetReportGroups -  Returns an array of report groups.
    **/
    batchGetReportGroups(req: operations.BatchGetReportGroupsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetReportGroupsResponse>;
    /**
     * batchGetReports -  Returns an array of reports.
    **/
    batchGetReports(req: operations.BatchGetReportsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetReportsResponse>;
    /**
     * createProject - Creates a build project.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * createReportGroup -  Creates a report group. A report group contains a collection of reports.
    **/
    createReportGroup(req: operations.CreateReportGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateReportGroupResponse>;
    /**
     * createWebhook - <p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
    **/
    createWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * deleteBuildBatch - Deletes a batch build.
    **/
    deleteBuildBatch(req: operations.DeleteBuildBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBuildBatchResponse>;
    /**
     * deleteProject -  Deletes a build project. When you delete a project, its builds are not deleted.
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * deleteReport -  Deletes a report.
    **/
    deleteReport(req: operations.DeleteReportRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportResponse>;
    /**
     * deleteReportGroup - Deletes a report group. Before you delete a report group, you must delete its reports.
    **/
    deleteReportGroup(req: operations.DeleteReportGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportGroupResponse>;
    /**
     * deleteResourcePolicy -  Deletes a resource policy that is identified by its resource ARN.
    **/
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * deleteSourceCredentials -  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.
    **/
    deleteSourceCredentials(req: operations.DeleteSourceCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSourceCredentialsResponse>;
    /**
     * deleteWebhook - For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
    **/
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * describeCodeCoverages - Retrieves one or more code coverage reports.
    **/
    describeCodeCoverages(req: operations.DescribeCodeCoveragesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCodeCoveragesResponse>;
    /**
     * describeTestCases -  Returns a list of details about test cases for a report.
    **/
    describeTestCases(req: operations.DescribeTestCasesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTestCasesResponse>;
    /**
     * getReportGroupTrend - Analyzes and accumulates test report values for the specified test reports.
    **/
    getReportGroupTrend(req: operations.GetReportGroupTrendRequest, config?: AxiosRequestConfig): Promise<operations.GetReportGroupTrendResponse>;
    /**
     * getResourcePolicy -  Gets a resource policy that is identified by its resource ARN.
    **/
    getResourcePolicy(req: operations.GetResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcePolicyResponse>;
    /**
     * importSourceCredentials -  Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository.
    **/
    importSourceCredentials(req: operations.ImportSourceCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ImportSourceCredentialsResponse>;
    /**
     * invalidateProjectCache - Resets the cache for a project.
    **/
    invalidateProjectCache(req: operations.InvalidateProjectCacheRequest, config?: AxiosRequestConfig): Promise<operations.InvalidateProjectCacheResponse>;
    /**
     * listBuildBatches - Retrieves the identifiers of your build batches in the current region.
    **/
    listBuildBatches(req: operations.ListBuildBatchesRequest, config?: AxiosRequestConfig): Promise<operations.ListBuildBatchesResponse>;
    /**
     * listBuildBatchesForProject - Retrieves the identifiers of the build batches for a specific project.
    **/
    listBuildBatchesForProject(req: operations.ListBuildBatchesForProjectRequest, config?: AxiosRequestConfig): Promise<operations.ListBuildBatchesForProjectResponse>;
    /**
     * listBuilds - Gets a list of build IDs, with each build ID representing a single build.
    **/
    listBuilds(req: operations.ListBuildsRequest, config?: AxiosRequestConfig): Promise<operations.ListBuildsResponse>;
    /**
     * listBuildsForProject - Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.
    **/
    listBuildsForProject(req: operations.ListBuildsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.ListBuildsForProjectResponse>;
    /**
     * listCuratedEnvironmentImages - Gets information about Docker images that are managed by CodeBuild.
    **/
    listCuratedEnvironmentImages(req: operations.ListCuratedEnvironmentImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListCuratedEnvironmentImagesResponse>;
    /**
     * listProjects - Gets a list of build project names, with each build project name representing a single build project.
    **/
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * listReportGroups -  Gets a list ARNs for the report groups in the current Amazon Web Services account.
    **/
    listReportGroups(req: operations.ListReportGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListReportGroupsResponse>;
    /**
     * listReports -  Returns a list of ARNs for the reports in the current Amazon Web Services account.
    **/
    listReports(req: operations.ListReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListReportsResponse>;
    /**
     * listReportsForReportGroup -  Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
    **/
    listReportsForReportGroup(req: operations.ListReportsForReportGroupRequest, config?: AxiosRequestConfig): Promise<operations.ListReportsForReportGroupResponse>;
    /**
     * listSharedProjects -  Gets a list of projects that are shared with other Amazon Web Services accounts or users.
    **/
    listSharedProjects(req: operations.ListSharedProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListSharedProjectsResponse>;
    /**
     * listSharedReportGroups -  Gets a list of report groups that are shared with other Amazon Web Services accounts or users.
    **/
    listSharedReportGroups(req: operations.ListSharedReportGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListSharedReportGroupsResponse>;
    /**
     * listSourceCredentials -  Returns a list of <code>SourceCredentialsInfo</code> objects.
    **/
    listSourceCredentials(req: operations.ListSourceCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceCredentialsResponse>;
    /**
     * putResourcePolicy -  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object.
    **/
    putResourcePolicy(req: operations.PutResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePolicyResponse>;
    /**
     * retryBuild - Restarts a build.
    **/
    retryBuild(req: operations.RetryBuildRequest, config?: AxiosRequestConfig): Promise<operations.RetryBuildResponse>;
    /**
     * retryBuildBatch - Restarts a failed batch build. Only batch builds that have failed can be retried.
    **/
    retryBuildBatch(req: operations.RetryBuildBatchRequest, config?: AxiosRequestConfig): Promise<operations.RetryBuildBatchResponse>;
    /**
     * startBuild - Starts running a build.
    **/
    startBuild(req: operations.StartBuildRequest, config?: AxiosRequestConfig): Promise<operations.StartBuildResponse>;
    /**
     * startBuildBatch - Starts a batch build for a project.
    **/
    startBuildBatch(req: operations.StartBuildBatchRequest, config?: AxiosRequestConfig): Promise<operations.StartBuildBatchResponse>;
    /**
     * stopBuild - Attempts to stop running a build.
    **/
    stopBuild(req: operations.StopBuildRequest, config?: AxiosRequestConfig): Promise<operations.StopBuildResponse>;
    /**
     * stopBuildBatch - Stops a running batch build.
    **/
    stopBuildBatch(req: operations.StopBuildBatchRequest, config?: AxiosRequestConfig): Promise<operations.StopBuildBatchResponse>;
    /**
     * updateProject - Changes the settings of a build project.
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
    /**
     * updateProjectVisibility - <p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>
    **/
    updateProjectVisibility(req: operations.UpdateProjectVisibilityRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectVisibilityResponse>;
    /**
     * updateReportGroup -  Updates a report group.
    **/
    updateReportGroup(req: operations.UpdateReportGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReportGroupResponse>;
    /**
     * updateWebhook - <p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>
    **/
    updateWebhook(req: operations.UpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
export {};
