import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TerminateJobFlowsInput
/** 
 *  Input to the <a>TerminateJobFlows</a> operation. 
**/
export class TerminateJobFlowsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobFlowIds" })
  jobFlowIds: string[];
}
