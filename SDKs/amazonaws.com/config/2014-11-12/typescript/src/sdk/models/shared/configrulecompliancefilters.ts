import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";



// ConfigRuleComplianceFilters
/** 
 * Filters the compliance results based on account ID, region, compliance type, and rule name.
**/
export class ConfigRuleComplianceFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: ComplianceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;
}
