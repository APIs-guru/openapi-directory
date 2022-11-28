import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Step } from "./step";



// DescribeStepOutput
/** 
 * This output contains the description of the cluster step.
**/
export class DescribeStepOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Step" })
  step?: Step;
}
