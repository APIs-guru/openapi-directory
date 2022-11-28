import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StateReason
/** 
 * Describes a state change.
**/
export class StateReason extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
