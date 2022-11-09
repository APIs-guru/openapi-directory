import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionTarget
/** 
 * Describes a target for an action.
**/
export class ActionTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
