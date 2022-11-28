import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://test.api.amadeus.com/v2"];
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
     * getFlightOffers - Return list of Flight Offers based on searching criteria.
    **/
    getFlightOffers(req: operations.GetFlightOffersRequest, config?: AxiosRequestConfig): Promise<operations.GetFlightOffersResponse>;
    /**
     * searchFlightOffers - Return list of Flight Offers based on posted searching criteria.
    **/
    searchFlightOffers(req: operations.SearchFlightOffersRequest, config?: AxiosRequestConfig): Promise<operations.SearchFlightOffersResponse>;
}
export {};
