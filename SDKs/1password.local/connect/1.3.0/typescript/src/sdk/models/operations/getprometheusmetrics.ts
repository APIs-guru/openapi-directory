import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const GETPROMETHEUSMETRICS_SERVERS = [
	"http://localhost:8080",
];



export class GetPrometheusMetricsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;
}


export class GetPrometheusMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPrometheusMetrics200TextPlainString?: string;

  @Metadata()
  statusCode: number;
}
