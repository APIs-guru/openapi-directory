import { SpeakeasyBase } from "../../../internal/utils";
export declare const GetPrometheusMetricsServerList: readonly ["http://localhost:8080"];
export declare class GetPrometheusMetricsRequest extends SpeakeasyBase {
    serverUrl?: string;
}
export declare class GetPrometheusMetricsResponse extends SpeakeasyBase {
    contentType: string;
    getPrometheusMetrics200TextPlainString?: string;
    statusCode: number;
}
