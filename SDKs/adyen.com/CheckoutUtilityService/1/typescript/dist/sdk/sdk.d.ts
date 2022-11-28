import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://checkout-test.adyen.com/v1"];
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
     * postOriginKeys - Create originKey values for one or more merchant domains.
     *
     * This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains.
    **/
    postOriginKeys(req: operations.PostOriginKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostOriginKeysResponse>;
}
export {};
