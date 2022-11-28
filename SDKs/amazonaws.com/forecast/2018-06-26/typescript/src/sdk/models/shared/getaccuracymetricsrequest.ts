import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccuracyMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn: string;
}
