import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GetAuthIntrospect(req: operations.GetAuthIntrospectRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthIntrospectResponse>;
    /**
     * This endpoint requires your JSON Web Token to have the *itemusages* feature.
    **/
    GetItemUsages(req: operations.GetItemUsagesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemUsagesResponse>;
    /**
     * This endpoint requires your JSON Web Token to have the *signinattempts* feature.
    **/
    GetSignInAttempts(req: operations.GetSignInAttemptsRequest, config?: AxiosRequestConfig): Promise<operations.GetSignInAttemptsResponse>;
}
export {};
