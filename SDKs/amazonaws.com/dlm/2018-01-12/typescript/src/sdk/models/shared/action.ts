import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrossRegionCopyAction } from "./crossregioncopyaction";



// Action
/** 
 * Specifies an action for an event-based policy.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrossRegionCopy", elemType: CrossRegionCopyAction })
  crossRegionCopy: CrossRegionCopyAction[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
