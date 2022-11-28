import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightHealth } from "./insighthealth";



// CloudFormationHealth
/** 
 *  Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack. 
**/
export class CloudFormationHealth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Insight" })
  insight?: InsightHealth;

  @SpeakeasyMetadata({ data: "json, name=StackName" })
  stackName?: string;
}
