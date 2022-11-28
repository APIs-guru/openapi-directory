import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForecastName" })
  forecastName: string;

  @SpeakeasyMetadata({ data: "json, name=ForecastTypes" })
  forecastTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
