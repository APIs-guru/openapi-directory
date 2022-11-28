import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterTypeEnum } from "./filtertypeenum";



// FilterRule
/** 
 * Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
**/
export class FilterRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FilterType" })
  filterType?: FilterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
