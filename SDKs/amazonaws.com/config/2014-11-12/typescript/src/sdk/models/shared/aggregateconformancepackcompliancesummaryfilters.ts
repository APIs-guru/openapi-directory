import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AggregateConformancePackComplianceSummaryFilters
/** 
 * Filters the results based on account ID and region. 
**/
export class AggregateConformancePackComplianceSummaryFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;
}
