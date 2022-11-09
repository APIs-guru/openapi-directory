import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CreateChangeset(req: operations.CreateChangesetRequest, config?: AxiosRequestConfig): Promise<operations.CreateChangesetResponse>;
    GetProgrammaticAccessCredentials(req: operations.GetProgrammaticAccessCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammaticAccessCredentialsResponse>;
    GetWorkingLocation(req: operations.GetWorkingLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkingLocationResponse>;
}
export {};
