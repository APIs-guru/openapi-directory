import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContributorInsightsSummary } from "./contributorinsightssummary";



export class ListContributorInsightsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContributorInsightsSummaries", elemType: ContributorInsightsSummary })
  contributorInsightsSummaries?: ContributorInsightsSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
