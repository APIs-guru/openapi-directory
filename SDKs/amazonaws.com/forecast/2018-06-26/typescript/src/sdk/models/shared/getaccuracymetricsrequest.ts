import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccuracyMetricsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn: string;
}
