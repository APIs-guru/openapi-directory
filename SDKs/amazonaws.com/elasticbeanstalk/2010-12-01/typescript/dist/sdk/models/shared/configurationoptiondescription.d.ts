import { SpeakeasyBase } from "../../../internal/utils";
import { OptionRestrictionRegex } from "./optionrestrictionregex";
import { ConfigurationOptionValueTypeEnum } from "./configurationoptionvaluetypeenum";
/**
 * Describes the possible values for a configuration option.
**/
export declare class ConfigurationOptionDescription extends SpeakeasyBase {
    changeSeverity?: string;
    defaultValue?: string;
    maxLength?: number;
    maxValue?: number;
    minValue?: number;
    name?: string;
    namespace?: string;
    regex?: OptionRestrictionRegex;
    userDefined?: boolean;
    valueOptions?: string[];
    valueType?: ConfigurationOptionValueTypeEnum;
}
