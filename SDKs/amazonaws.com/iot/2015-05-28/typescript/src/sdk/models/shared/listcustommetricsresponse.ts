import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListCustomMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
