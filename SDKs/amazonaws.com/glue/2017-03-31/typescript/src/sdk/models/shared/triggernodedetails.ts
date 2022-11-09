import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Trigger } from "./trigger";


// TriggerNodeDetails
/** 
 * The details of a Trigger node present in the workflow.
**/
export class TriggerNodeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Trigger" })
  trigger?: Trigger;
}
