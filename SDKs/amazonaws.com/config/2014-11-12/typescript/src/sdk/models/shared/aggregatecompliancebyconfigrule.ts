import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Compliance } from "./compliance";



// AggregateComplianceByConfigRule
/** 
 * <p>Indicates whether an Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p>
**/
export class AggregateComplianceByConfigRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=Compliance" })
  compliance?: Compliance;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;
}
