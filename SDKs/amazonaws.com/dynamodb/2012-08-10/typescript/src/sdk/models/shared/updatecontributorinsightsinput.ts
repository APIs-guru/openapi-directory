import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContributorInsightsActionEnum } from "./contributorinsightsactionenum";


export class UpdateContributorInsightsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContributorInsightsAction" })
  contributorInsightsAction: ContributorInsightsActionEnum;

  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
