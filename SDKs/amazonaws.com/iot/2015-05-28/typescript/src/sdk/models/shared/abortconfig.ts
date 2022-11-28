import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbortCriteria } from "./abortcriteria";



// AbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class AbortConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criteriaList", elemType: AbortCriteria })
  criteriaList: AbortCriteria[];
}
