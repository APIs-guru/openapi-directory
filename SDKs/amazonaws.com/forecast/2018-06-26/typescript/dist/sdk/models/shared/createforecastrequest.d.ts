import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateForecastRequest extends SpeakeasyBase {
    forecastName: string;
    forecastTypes?: string[];
    predictorArn: string;
    tags?: Tag[];
}
