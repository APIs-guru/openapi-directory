import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrialMinutes
/** 
 * Represents information about free trial device minutes for an AWS account.
**/
export class TrialMinutes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=remaining" })
  remaining?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
