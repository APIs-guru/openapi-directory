import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopExecutionTrigger
/** 
 * The interaction that stopped a pipeline execution.
**/
export class StopExecutionTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
