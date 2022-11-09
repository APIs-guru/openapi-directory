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
     * Disables stored payment details to stop charging a shopper with this particular recurring detail ID.
     *
     * For more information, refer to [Disable stored details](https://docs.adyen.com/developers/features/recurring-payments/disable-stored-details).
    **/
    PostDisable(req: operations.PostDisableRequest, config?: AxiosRequestConfig): Promise<operations.PostDisableResponse>;
    /**
     * Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.
     *
     * For more information, refer to [Retrieve stored details](https://docs.adyen.com/developers/features/recurring-payments/retrieve-stored-details).
    **/
    PostListRecurringDetails(req: operations.PostListRecurringDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PostListRecurringDetailsResponse>;
}
export {};
