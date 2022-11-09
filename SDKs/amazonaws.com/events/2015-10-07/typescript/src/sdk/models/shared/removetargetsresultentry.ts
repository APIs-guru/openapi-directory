import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveTargetsResultEntry
/** 
 * Represents a target that failed to be removed from a rule.
**/
export class RemoveTargetsResultEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=TargetId" })
  targetId?: string;
}
