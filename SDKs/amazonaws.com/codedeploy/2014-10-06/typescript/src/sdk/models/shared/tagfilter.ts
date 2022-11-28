import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagFilterTypeEnum } from "./tagfiltertypeenum";



// TagFilter
/** 
 * Information about an on-premises instance tag filter.
**/
export class TagFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: TagFilterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
