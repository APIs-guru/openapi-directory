import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Datapoint } from "./datapoint";



export class GetScalingPlanResourceForecastDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Datapoints", elemType: Datapoint })
  datapoints: Datapoint[];
}
