import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityForecast } from "./capacityforecast";
import { LoadForecast } from "./loadforecast";
export declare class GetPredictiveScalingForecastAnswer extends SpeakeasyBase {
    capacityForecast: CapacityForecast;
    loadForecast: LoadForecast[];
    updateTime: Date;
}
