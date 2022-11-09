import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagFilterTypeEnum } from "./tagfiltertypeenum";


// TagFilter
/** 
 * Information about an on-premises instance tag filter.
**/
export class TagFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Type" })
  type?: TagFilterTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
