import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare const GETPROMETHEUSMETRICS_SERVERS: string[];
export declare class GetPrometheusMetricsRequest extends SpeakeasyBase {
    serverUrl?: string;
}
export declare class GetPrometheusMetricsResponse extends SpeakeasyBase {
    contentType: string;
    getPrometheusMetrics200TextPlainString?: string;
    statusCode: number;
}
