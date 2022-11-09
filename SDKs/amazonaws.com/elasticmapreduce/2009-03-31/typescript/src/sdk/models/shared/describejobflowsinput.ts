import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobFlowExecutionStateEnum } from "./jobflowexecutionstateenum";


// DescribeJobFlowsInput
/** 
 *  The input for the <a>DescribeJobFlows</a> operation. 
**/
export class DescribeJobFlowsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=JobFlowIds" })
  jobFlowIds?: string[];

  @Metadata({ data: "json, name=JobFlowStates" })
  jobFlowStates?: JobFlowExecutionStateEnum[];
}
