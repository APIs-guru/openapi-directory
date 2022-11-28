import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobFlowDetail } from "./jobflowdetail";



// DescribeJobFlowsOutput
/** 
 *  The output for the <a>DescribeJobFlows</a> operation. 
**/
export class DescribeJobFlowsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobFlows", elemType: JobFlowDetail })
  jobFlows?: JobFlowDetail[];
}
