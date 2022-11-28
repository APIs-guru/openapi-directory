import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobFlowExecutionStateEnum } from "./jobflowexecutionstateenum";



// DescribeJobFlowsInput
/** 
 *  The input for the <a>DescribeJobFlows</a> operation. 
**/
export class DescribeJobFlowsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=JobFlowIds" })
  jobFlowIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=JobFlowStates" })
  jobFlowStates?: JobFlowExecutionStateEnum[];
}
