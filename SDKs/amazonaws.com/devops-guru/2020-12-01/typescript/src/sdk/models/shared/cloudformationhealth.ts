import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightHealth } from "./insighthealth";


// CloudFormationHealth
/** 
 *  Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack. 
**/
export class CloudFormationHealth extends SpeakeasyBase {
  @Metadata({ data: "json, name=Insight" })
  insight?: InsightHealth;

  @Metadata({ data: "json, name=StackName" })
  stackName?: string;
}
