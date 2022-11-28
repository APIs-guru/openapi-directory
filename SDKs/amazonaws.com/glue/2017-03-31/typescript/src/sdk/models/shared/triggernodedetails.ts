import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";



// TriggerNodeDetails
/** 
 * The details of a Trigger node present in the workflow.
**/
export class TriggerNodeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Trigger" })
  trigger?: Trigger;
}
