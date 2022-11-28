import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://contact-lens.{region}.amazonaws.com", "https://contact-lens.{region}.amazonaws.com", "http://contact-lens.{region}.amazonaws.com.cn", "https://contact-lens.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * listRealtimeContactAnalysisSegments - Provides a list of analysis segments for a real-time analysis session.
    **/
    listRealtimeContactAnalysisSegments(req: operations.ListRealtimeContactAnalysisSegmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListRealtimeContactAnalysisSegmentsResponse>;
}
export {};
