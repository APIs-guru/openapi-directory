import { SpeakeasyBase } from "../../../internal/utils";
import { ActionConfigurationPropertyTypeEnum } from "./actionconfigurationpropertytypeenum";
/**
 * Represents information about an action configuration property.
**/
export declare class ActionConfigurationProperty extends SpeakeasyBase {
    description?: string;
    key: boolean;
    name: string;
    queryable?: boolean;
    required: boolean;
    secret: boolean;
    type?: ActionConfigurationPropertyTypeEnum;
}
