import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateFleetMetricResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricArn" })
  metricArn?: string;

  @Metadata({ data: "json, name=metricName" })
  metricName?: string;
}
