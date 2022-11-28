import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrefixFormatEnum } from "./prefixformatenum";
import { PrefixTypeEnum } from "./prefixtypeenum";



// PrefixConfig
/** 
 *  Determines the prefix that Amazon AppFlow applies to the destination folder name. You can name your destination folders according to the flow frequency and date. 
**/
export class PrefixConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prefixFormat" })
  prefixFormat?: PrefixFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=prefixType" })
  prefixType?: PrefixTypeEnum;
}
