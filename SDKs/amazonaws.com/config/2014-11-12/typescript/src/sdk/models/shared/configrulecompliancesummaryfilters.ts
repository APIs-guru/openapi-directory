import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigRuleComplianceSummaryFilters
/** 
 * Filters the results based on the account IDs and regions.
**/
export class ConfigRuleComplianceSummaryFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;
}
