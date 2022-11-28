import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LifecycleTransitionReason
/** 
 * Describes why a resource lifecycle state changed.
**/
export class LifecycleTransitionReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
