import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrefixFormatEnum } from "./prefixformatenum";
import { PrefixTypeEnum } from "./prefixtypeenum";


// PrefixConfig
/** 
 *  Determines the prefix that Amazon AppFlow applies to the destination folder name. You can name your destination folders according to the flow frequency and date. 
**/
export class PrefixConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=prefixFormat" })
  prefixFormat?: PrefixFormatEnum;

  @Metadata({ data: "json, name=prefixType" })
  prefixType?: PrefixTypeEnum;
}
