import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeStepInput
/** 
 * This input determines which step to describe.
**/
export class DescribeStepInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=StepId" })
  stepId: string;
}
