import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";



// ListenerDescription
/** 
 * The policies enabled for a listener.
**/
export class ListenerDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  listener?: Listener;

  @SpeakeasyMetadata()
  policyNames?: string[];
}
