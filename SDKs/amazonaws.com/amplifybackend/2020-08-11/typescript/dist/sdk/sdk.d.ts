import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://amplifybackend.{region}.amazonaws.com", "https://amplifybackend.{region}.amazonaws.com", "http://amplifybackend.{region}.amazonaws.com.cn", "https://amplifybackend.{region}.amazonaws.com.cn"];
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
     * cloneBackend - This operation clones an existing backend.
    **/
    cloneBackend(req: operations.CloneBackendRequest, config?: AxiosRequestConfig): Promise<operations.CloneBackendResponse>;
    /**
     * createBackend - This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
    **/
    createBackend(req: operations.CreateBackendRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendResponse>;
    /**
     * createBackendApi - Creates a new backend API resource.
    **/
    createBackendApi(req: operations.CreateBackendApiRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendApiResponse>;
    /**
     * createBackendAuth - Creates a new backend authentication resource.
    **/
    createBackendAuth(req: operations.CreateBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendAuthResponse>;
    /**
     * createBackendConfig - Creates a config object for a backend.
    **/
    createBackendConfig(req: operations.CreateBackendConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateBackendConfigResponse>;
    /**
     * createToken - Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
    **/
    createToken(req: operations.CreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * deleteBackend - Removes an existing environment from your Amplify project.
    **/
    deleteBackend(req: operations.DeleteBackendRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackendResponse>;
    /**
     * deleteBackendApi - Deletes an existing backend API resource.
    **/
    deleteBackendApi(req: operations.DeleteBackendApiRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackendApiResponse>;
    /**
     * deleteBackendAuth - Deletes an existing backend authentication resource.
    **/
    deleteBackendAuth(req: operations.DeleteBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackendAuthResponse>;
    /**
     * deleteToken - Deletes the challenge token based on the given appId and sessionId.
    **/
    deleteToken(req: operations.DeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * generateBackendApiModels - Generates a model schema for an existing backend API resource.
    **/
    generateBackendApiModels(req: operations.GenerateBackendApiModelsRequest, config?: AxiosRequestConfig): Promise<operations.GenerateBackendApiModelsResponse>;
    /**
     * getBackend - Provides project-level details for your Amplify UI project.
    **/
    getBackend(req: operations.GetBackendRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendResponse>;
    /**
     * getBackendApi - Gets the details for a backend API.
    **/
    getBackendApi(req: operations.GetBackendApiRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendApiResponse>;
    /**
     * getBackendApiModels - Generates a model schema for existing backend API resource.
    **/
    getBackendApiModels(req: operations.GetBackendApiModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendApiModelsResponse>;
    /**
     * getBackendAuth - Gets a backend auth details.
    **/
    getBackendAuth(req: operations.GetBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendAuthResponse>;
    /**
     * getBackendJob - Returns information about a specific job.
    **/
    getBackendJob(req: operations.GetBackendJobRequest, config?: AxiosRequestConfig): Promise<operations.GetBackendJobResponse>;
    /**
     * getToken - Gets the challenge token based on the given appId and sessionId.
    **/
    getToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * importBackendAuth - Imports an existing backend authentication resource.
    **/
    importBackendAuth(req: operations.ImportBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.ImportBackendAuthResponse>;
    /**
     * listBackendJobs - Lists the jobs for the backend of an Amplify app.
    **/
    listBackendJobs(req: operations.ListBackendJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListBackendJobsResponse>;
    /**
     * removeAllBackends - Removes all backend environments from your Amplify project.
    **/
    removeAllBackends(req: operations.RemoveAllBackendsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAllBackendsResponse>;
    /**
     * removeBackendConfig - Removes the AWS resources required to access the Amplify Admin UI.
    **/
    removeBackendConfig(req: operations.RemoveBackendConfigRequest, config?: AxiosRequestConfig): Promise<operations.RemoveBackendConfigResponse>;
    /**
     * updateBackendApi - Updates an existing backend API resource.
    **/
    updateBackendApi(req: operations.UpdateBackendApiRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBackendApiResponse>;
    /**
     * updateBackendAuth - Updates an existing backend authentication resource.
    **/
    updateBackendAuth(req: operations.UpdateBackendAuthRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBackendAuthResponse>;
    /**
     * updateBackendConfig - Updates the AWS resources required to access the Amplify Admin UI.
    **/
    updateBackendConfig(req: operations.UpdateBackendConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBackendConfigResponse>;
    /**
     * updateBackendJob - Updates a specific job.
    **/
    updateBackendJob(req: operations.UpdateBackendJobRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBackendJobResponse>;
}
export {};
