import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusTypeEnum } from "./statustypeenum";


// BuildBatchFilter
/** 
 * Specifies filters when retrieving batch builds.
**/
export class BuildBatchFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: StatusTypeEnum;
}
