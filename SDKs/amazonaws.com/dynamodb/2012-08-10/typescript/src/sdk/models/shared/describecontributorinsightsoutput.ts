import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContributorInsightsStatusEnum } from "./contributorinsightsstatusenum";
import { FailureException } from "./failureexception";



export class DescribeContributorInsightsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContributorInsightsRuleList" })
  contributorInsightsRuleList?: string[];

  @SpeakeasyMetadata({ data: "json, name=ContributorInsightsStatus" })
  contributorInsightsStatus?: ContributorInsightsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=FailureException" })
  failureException?: FailureException;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" })
  lastUpdateDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}
