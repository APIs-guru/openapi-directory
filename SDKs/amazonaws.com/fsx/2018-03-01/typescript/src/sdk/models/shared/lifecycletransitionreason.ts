import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LifecycleTransitionReason
/** 
 * Describes why a resource lifecycle state changed.
**/
export class LifecycleTransitionReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
