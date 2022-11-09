import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeStepInput
/** 
 * This input determines which step to describe.
**/
export class DescribeStepInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=StepId" })
  stepId: string;
}
