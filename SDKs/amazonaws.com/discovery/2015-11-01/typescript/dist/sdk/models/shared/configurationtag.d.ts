import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationItemTypeEnum } from "./configurationitemtypeenum";
/**
 * Tags for a configuration item. Tags are metadata that help you categorize IT assets.
**/
export declare class ConfigurationTag extends SpeakeasyBase {
    configurationId?: string;
    configurationType?: ConfigurationItemTypeEnum;
    key?: string;
    timeOfCreation?: Date;
    value?: string;
}
