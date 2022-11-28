import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TerminateJobFlowsInput
/** 
 *  Input to the <a>TerminateJobFlows</a> operation. 
**/
export class TerminateJobFlowsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobFlowIds" })
  jobFlowIds: string[];
}
