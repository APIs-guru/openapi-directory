import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AggregateConformancePackComplianceSummaryFilters
/** 
 * Filters the results based on account ID and region. 
**/
export class AggregateConformancePackComplianceSummaryFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;
}
