import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionTarget
/** 
 * Describes a target for an action.
**/
export class ActionTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
