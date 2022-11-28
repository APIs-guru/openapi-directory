import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopExecutionTrigger
/** 
 * The interaction that stopped a pipeline execution.
**/
export class StopExecutionTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
