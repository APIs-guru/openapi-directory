import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListCustomMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
