import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutTargetsResultEntry
/** 
 * Represents a target that failed to be added to a rule.
**/
export class PutTargetsResultEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId?: string;
}
