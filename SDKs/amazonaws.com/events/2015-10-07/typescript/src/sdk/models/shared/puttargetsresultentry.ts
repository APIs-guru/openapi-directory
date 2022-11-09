import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutTargetsResultEntry
/** 
 * Represents a target that failed to be added to a rule.
**/
export class PutTargetsResultEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=TargetId" })
  targetId?: string;
}
