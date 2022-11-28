import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityForecast } from "./capacityforecast";
import { LoadForecast } from "./loadforecast";



export class GetPredictiveScalingForecastAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityForecast: CapacityForecast;

  @SpeakeasyMetadata({ elemType: LoadForecast })
  loadForecast: LoadForecast[];

  @SpeakeasyMetadata()
  updateTime: Date;
}
