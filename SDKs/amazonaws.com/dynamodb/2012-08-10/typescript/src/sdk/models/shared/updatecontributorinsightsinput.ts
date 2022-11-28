import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContributorInsightsActionEnum } from "./contributorinsightsactionenum";



export class UpdateContributorInsightsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContributorInsightsAction" })
  contributorInsightsAction: ContributorInsightsActionEnum;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
