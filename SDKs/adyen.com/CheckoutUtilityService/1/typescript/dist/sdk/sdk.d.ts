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
    /**
     * This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains.
    **/
    PostOriginKeys(req: operations.PostOriginKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostOriginKeysResponse>;
}
export {};
