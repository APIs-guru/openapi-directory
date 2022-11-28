import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContributorInsightsStatusEnum } from "./contributorinsightsstatusenum";



// ContributorInsightsSummary
/** 
 * Represents a Contributor Insights summary entry.
**/
export class ContributorInsightsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContributorInsightsStatus" })
  contributorInsightsStatus?: ContributorInsightsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}
