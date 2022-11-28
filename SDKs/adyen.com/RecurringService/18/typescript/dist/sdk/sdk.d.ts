import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://pal-test.adyen.com/pal/servlet/Recurring/v18"];
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
     * postDisable - Disables stored payment details.
     *
     * Disables stored payment details to stop charging a shopper with this particular recurring detail ID.
     *
     * For more information, refer to [Disable stored details](https://docs.adyen.com/developers/features/recurring-payments/disable-stored-details).
    **/
    postDisable(req: operations.PostDisableRequest, config?: AxiosRequestConfig): Promise<operations.PostDisableResponse>;
    /**
     * postListRecurringDetails - Retrieves stored payment details for a shopper.
     *
     * Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.
     *
     * For more information, refer to [Retrieve stored details](https://docs.adyen.com/developers/features/recurring-payments/retrieve-stored-details).
    **/
    postListRecurringDetails(req: operations.PostListRecurringDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PostListRecurringDetailsResponse>;
}
export {};
