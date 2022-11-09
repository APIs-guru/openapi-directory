import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContributorInsightsStatusEnum } from "./contributorinsightsstatusenum";
import { FailureException } from "./failureexception";


export class DescribeContributorInsightsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContributorInsightsRuleList" })
  contributorInsightsRuleList?: string[];

  @Metadata({ data: "json, name=ContributorInsightsStatus" })
  contributorInsightsStatus?: ContributorInsightsStatusEnum;

  @Metadata({ data: "json, name=FailureException" })
  failureException?: FailureException;

  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=LastUpdateDateTime" })
  lastUpdateDateTime?: Date;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
