import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://pal-test.adyen.com/pal/services/TestCard/v1"];
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
     * postCreateTestCardRanges - Creates one or more test card ranges.
     *
     * Creates one or more test card ranges.
    **/
    postCreateTestCardRanges(req: operations.PostCreateTestCardRangesRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateTestCardRangesResponse>;
}
export {};
