import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://pal-test.adyen.com/pal/servlet/Recurring/v25"];
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
     * For more information, refer to [Disable stored details](https://docs.adyen.com/classic-integration/recurring-payments/disable-stored-details/).
    **/
    postDisable(req: operations.PostDisableRequest, config?: AxiosRequestConfig): Promise<operations.PostDisableResponse>;
    /**
     * postListRecurringDetails - Retrieves stored payment details for a shopper.
     *
     * Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.
     *
     * For more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).
    **/
    postListRecurringDetails(req: operations.PostListRecurringDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PostListRecurringDetailsResponse>;
    /**
     * postScheduleAccountUpdater - Schedules running of the Account Updater.
     *
     * When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:
     * * If the card information is provided, all the sub-fields for `card` are mandatory.
     * * If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.
    **/
    postScheduleAccountUpdater(req: operations.PostScheduleAccountUpdaterRequest, config?: AxiosRequestConfig): Promise<operations.PostScheduleAccountUpdaterResponse>;
}
export {};
