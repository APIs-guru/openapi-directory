import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AbortCriteria } from "./abortcriteria";


// AbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class AbortConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria })
  criteriaList: AbortCriteria[];
}
