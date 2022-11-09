import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContributorInsightsStatusEnum } from "./contributorinsightsstatusenum";


export class UpdateContributorInsightsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContributorInsightsStatus" })
  contributorInsightsStatus?: ContributorInsightsStatusEnum;

  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
