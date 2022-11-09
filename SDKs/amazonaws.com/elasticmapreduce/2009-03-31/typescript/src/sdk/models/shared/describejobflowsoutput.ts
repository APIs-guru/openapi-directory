import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobFlowDetail } from "./jobflowdetail";


// DescribeJobFlowsOutput
/** 
 *  The output for the <a>DescribeJobFlows</a> operation. 
**/
export class DescribeJobFlowsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobFlows", elemType: shared.JobFlowDetail })
  jobFlows?: JobFlowDetail[];
}
