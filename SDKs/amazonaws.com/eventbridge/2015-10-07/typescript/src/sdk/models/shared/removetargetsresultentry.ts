import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveTargetsResultEntry
/** 
 * Represents a target that failed to be removed from a rule.
**/
export class RemoveTargetsResultEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId?: string;
}
