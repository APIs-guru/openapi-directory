import { SpeakeasyBase } from "../../../internal/utils";
import { PrefixFormatEnum } from "./prefixformatenum";
import { PrefixTypeEnum } from "./prefixtypeenum";
/**
 *  Determines the prefix that Amazon AppFlow applies to the destination folder name. You can name your destination folders according to the flow frequency and date.
**/
export declare class PrefixConfig extends SpeakeasyBase {
    prefixFormat?: PrefixFormatEnum;
    prefixType?: PrefixTypeEnum;
}
