import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://amplify.{region}.amazonaws.com", "https://amplify.{region}.amazonaws.com", "http://amplify.{region}.amazonaws.com.cn", "https://amplify.{region}.amazonaws.com.cn"];
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
     * createApp -  Creates a new Amplify app.
    **/
    createApp(req: operations.CreateAppRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppResponse>;
    /**
     * createBackendEnvironment -  Creates a new backend environment for an Amplify app.
    **/
    createBackendEnvironment(req: operations.CreateBackendEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendEnvironmentResponse>;
    /**
     * createBranch -  Creates a new branch for an Amplify app.
    **/
    createBranch(req: operations.CreateBranchRequest, config?: AxiosRequestConfig): Promise<operations.CreateBranchResponse>;
    /**
     * createDeployment -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository.
    **/
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * createDomainAssociation -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app
    **/
    createDomainAssociation(req: operations.CreateDomainAssociationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainAssociationResponse>;
    /**
     * createWebhook -  Creates a new webhook on an Amplify app.
    **/
    createWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * deleteApp -  Deletes an existing Amplify app specified by an app ID.
    **/
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * deleteBackendEnvironment -  Deletes a backend environment for an Amplify app.
    **/
    deleteBackendEnvironment(req: operations.DeleteBackendEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackendEnvironmentResponse>;
    /**
     * deleteBranch -  Deletes a branch for an Amplify app.
    **/
    deleteBranch(req: operations.DeleteBranchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBranchResponse>;
    /**
     * deleteDomainAssociation -  Deletes a domain association for an Amplify app.
    **/
    deleteDomainAssociation(req: operations.DeleteDomainAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainAssociationResponse>;
    /**
     * deleteJob -  Deletes a job for a branch of an Amplify app.
    **/
    deleteJob(req: operations.DeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    /**
     * deleteWebhook -  Deletes a webhook.
    **/
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * generateAccessLogs -  Returns the website access logs for a specific time range using a presigned URL.
    **/
    generateAccessLogs(req: operations.GenerateAccessLogsRequest, config?: AxiosRequestConfig): Promise<operations.GenerateAccessLogsResponse>;
    /**
     * getApp -  Returns an existing Amplify app by appID.
    **/
    getApp(req: operations.GetAppRequest, config?: AxiosRequestConfig): Promise<operations.GetAppResponse>;
    /**
     * getArtifactUrl -  Returns the artifact info that corresponds to an artifact id.
    **/
    getArtifactUrl(req: operations.GetArtifactUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactUrlResponse>;
    /**
     * getBackendEnvironment -  Returns a backend environment for an Amplify app.
    **/
    getBackendEnvironment(req: operations.GetBackendEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendEnvironmentResponse>;
    /**
     * getBranch -  Returns a branch for an Amplify app.
    **/
    getBranch(req: operations.GetBranchRequest, config?: AxiosRequestConfig): Promise<operations.GetBranchResponse>;
    /**
     * getDomainAssociation -  Returns the domain information for an Amplify app.
    **/
    getDomainAssociation(req: operations.GetDomainAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainAssociationResponse>;
    /**
     * getJob -  Returns a job for a branch of an Amplify app.
    **/
    getJob(req: operations.GetJobRequest, config?: AxiosRequestConfig): Promise<operations.GetJobResponse>;
    /**
     * getWebhook -  Returns the webhook information that corresponds to a specified webhook ID.
    **/
    getWebhook(req: operations.GetWebhookRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhookResponse>;
    /**
     * listApps -  Returns a list of the existing Amplify apps.
    **/
    listApps(req: operations.ListAppsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppsResponse>;
    /**
     * listArtifacts -  Returns a list of artifacts for a specified app, branch, and job.
    **/
    listArtifacts(req: operations.ListArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactsResponse>;
    /**
     * listBackendEnvironments -  Lists the backend environments for an Amplify app.
    **/
    listBackendEnvironments(req: operations.ListBackendEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListBackendEnvironmentsResponse>;
    /**
     * listBranches -  Lists the branches of an Amplify app.
    **/
    listBranches(req: operations.ListBranchesRequest, config?: AxiosRequestConfig): Promise<operations.ListBranchesResponse>;
    /**
     * listDomainAssociations -  Returns the domain associations for an Amplify app.
    **/
    listDomainAssociations(req: operations.ListDomainAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainAssociationsResponse>;
    /**
     * listJobs -  Lists the jobs for a branch of an Amplify app.
    **/
    listJobs(req: operations.ListJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsResponse>;
    /**
     * listTagsForResource -  Returns a list of tags for a specified Amazon Resource Name (ARN).
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listWebhooks -  Returns a list of webhooks for an Amplify app.
    **/
    listWebhooks(req: operations.ListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.ListWebhooksResponse>;
    /**
     * startDeployment -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository.
    **/
    startDeployment(req: operations.StartDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.StartDeploymentResponse>;
    /**
     * startJob -  Starts a new job for a branch of an Amplify app.
    **/
    startJob(req: operations.StartJobRequest, config?: AxiosRequestConfig): Promise<operations.StartJobResponse>;
    /**
     * stopJob -  Stops a job that is in progress for a branch of an Amplify app.
    **/
    stopJob(req: operations.StopJobRequest, config?: AxiosRequestConfig): Promise<operations.StopJobResponse>;
    /**
     * tagResource -  Tags the resource with a tag key and value.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource -  Untags a resource with a specified Amazon Resource Name (ARN).
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApp -  Updates an existing Amplify app.
    **/
    updateApp(req: operations.UpdateAppRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppResponse>;
    /**
     * updateBranch -  Updates a branch for an Amplify app.
    **/
    updateBranch(req: operations.UpdateBranchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBranchResponse>;
    /**
     * updateDomainAssociation -  Creates a new domain association for an Amplify app.
    **/
    updateDomainAssociation(req: operations.UpdateDomainAssociationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainAssociationResponse>;
    /**
     * updateWebhook -  Updates a webhook.
    **/
    updateWebhook(req: operations.UpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
export {};
