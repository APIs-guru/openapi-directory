import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContributorInsightsStatusEnum } from "./contributorinsightsstatusenum";


// ContributorInsightsSummary
/** 
 * Represents a Contributor Insights summary entry.
**/
export class ContributorInsightsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContributorInsightsStatus" })
  contributorInsightsStatus?: ContributorInsightsStatusEnum;

  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
