import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://finspace-api.{region}.amazonaws.com", "https://finspace-api.{region}.amazonaws.com", "http://finspace-api.{region}.amazonaws.com.cn", "https://finspace-api.{region}.amazonaws.com.cn"];
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
     * createChangeset - Creates a new changeset in a FinSpace dataset.
    **/
    createChangeset(req: operations.CreateChangesetRequest, config?: AxiosRequestConfig): Promise<operations.CreateChangesetResponse>;
    /**
     * getProgrammaticAccessCredentials - Request programmatic credentials to use with Habanero SDK.
    **/
    getProgrammaticAccessCredentials(req: operations.GetProgrammaticAccessCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammaticAccessCredentialsResponse>;
    /**
     * getWorkingLocation - A temporary Amazon S3 location to copy your files from a source location to stage or use as a scratch space in Habanero notebook.
    **/
    getWorkingLocation(req: operations.GetWorkingLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkingLocationResponse>;
}
export {};
