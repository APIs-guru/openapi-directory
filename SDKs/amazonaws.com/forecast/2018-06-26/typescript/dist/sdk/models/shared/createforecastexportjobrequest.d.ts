import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataDestination } from "./datadestination";
import { Tag } from "./tag";
export declare class CreateForecastExportJobRequest extends SpeakeasyBase {
    destination: DataDestination;
    forecastArn: string;
    forecastExportJobName: string;
    tags?: Tag[];
}
