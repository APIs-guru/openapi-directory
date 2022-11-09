import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Step } from "./step";


// DescribeStepOutput
/** 
 * This output contains the description of the cluster step.
**/
export class DescribeStepOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Step" })
  step?: Step;
}
