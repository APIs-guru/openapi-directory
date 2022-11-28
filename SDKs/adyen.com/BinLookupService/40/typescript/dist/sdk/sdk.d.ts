import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://pal-test.adyen.com/pal/servlet/BinLookup/v40"];
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
     * postGet3dsAvailability - Checks 3D Secure availability.
     *
     * Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.
     *
     * For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).
    **/
    postGet3dsAvailability(req: operations.PostGet3dsAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.PostGet3dsAvailabilityResponse>;
    /**
     * postGetCostEstimate - Gets a cost estimate.
     *
     * Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.
     *
     * To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).
     *
     * > Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.
    **/
    postGetCostEstimate(req: operations.PostGetCostEstimateRequest, config?: AxiosRequestConfig): Promise<operations.PostGetCostEstimateResponse>;
}
export {};
