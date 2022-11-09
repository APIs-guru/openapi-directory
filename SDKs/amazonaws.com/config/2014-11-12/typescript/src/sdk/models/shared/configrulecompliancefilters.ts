import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";


// ConfigRuleComplianceFilters
/** 
 * Filters the compliance results based on account ID, region, compliance type, and rule name.
**/
export class ConfigRuleComplianceFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: ComplianceTypeEnum;

  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;
}
