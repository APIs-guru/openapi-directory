import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterTypeEnum } from "./filtertypeenum";


// FilterRule
/** 
 * Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
**/
export class FilterRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=FilterType" })
  filterType?: FilterTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
