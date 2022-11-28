import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const GetPrometheusMetricsServerList = [
	"http://localhost:8080",
] as const;


export class GetPrometheusMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;
}


export class GetPrometheusMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPrometheusMetrics200TextPlainString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
