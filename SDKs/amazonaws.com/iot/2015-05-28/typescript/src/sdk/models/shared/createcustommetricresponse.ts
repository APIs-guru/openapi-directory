import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCustomMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricArn" })
  metricArn?: string;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;
}
