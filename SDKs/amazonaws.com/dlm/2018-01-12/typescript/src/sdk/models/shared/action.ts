import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CrossRegionCopyAction } from "./crossregioncopyaction";


// Action
/** 
 * Specifies an action for an event-based policy.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrossRegionCopy", elemType: shared.CrossRegionCopyAction })
  crossRegionCopy: CrossRegionCopyAction[];

  @Metadata({ data: "json, name=Name" })
  name: string;
}
