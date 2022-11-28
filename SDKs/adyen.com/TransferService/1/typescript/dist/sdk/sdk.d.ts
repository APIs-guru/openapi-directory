import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://balanceplatform-api-test.adyen.com/btl/v1"];
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
     * postTransfers - Transfer funds.
     *
     * Starts a transfer request to move funds within your balance platform, or send funds to a [transfer instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments). Adyen sends the outcome of the transfer request through webhooks.
     *
     * To use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.
    **/
    postTransfers(req: operations.PostTransfersRequest, config?: AxiosRequestConfig): Promise<operations.PostTransfersResponse>;
}
export {};
