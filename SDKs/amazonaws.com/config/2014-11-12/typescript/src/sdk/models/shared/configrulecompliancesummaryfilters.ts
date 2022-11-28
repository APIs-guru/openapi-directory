import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigRuleComplianceSummaryFilters
/** 
 * Filters the results based on the account IDs and regions.
**/
export class ConfigRuleComplianceSummaryFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;
}
