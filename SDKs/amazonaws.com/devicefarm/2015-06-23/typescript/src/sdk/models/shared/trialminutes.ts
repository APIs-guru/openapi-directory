import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrialMinutes
/** 
 * Represents information about free trial device minutes for an AWS account.
**/
export class TrialMinutes extends SpeakeasyBase {
  @Metadata({ data: "json, name=remaining" })
  remaining?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
