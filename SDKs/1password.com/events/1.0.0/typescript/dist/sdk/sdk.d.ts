import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://events.1password.com", "https://events.1password.ca", "https://events.1password.eu", "https://events.ent.1password.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getAuthIntrospect - Performs introspection of the provided Bearer JWT token
    **/
    getAuthIntrospect(req: operations.GetAuthIntrospectRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthIntrospectResponse>;
    /**
     * getItemUsages - Retrieves item usages
     *
     * This endpoint requires your JSON Web Token to have the *itemusages* feature.
    **/
    getItemUsages(req: operations.GetItemUsagesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemUsagesResponse>;
    /**
     * getSignInAttempts - Retrieves sign-in attempts
     *
     * This endpoint requires your JSON Web Token to have the *signinattempts* feature.
    **/
    getSignInAttempts(req: operations.GetSignInAttemptsRequest, config?: AxiosRequestConfig): Promise<operations.GetSignInAttemptsResponse>;
}
export {};
