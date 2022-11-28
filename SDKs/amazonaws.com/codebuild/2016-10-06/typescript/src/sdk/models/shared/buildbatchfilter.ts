import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";



// BuildBatchFilter
/** 
 * Specifies filters when retrieving batch builds.
**/
export class BuildBatchFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusTypeEnum;
}
