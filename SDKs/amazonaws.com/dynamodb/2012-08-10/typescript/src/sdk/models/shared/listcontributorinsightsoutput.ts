import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContributorInsightsSummary } from "./contributorinsightssummary";


export class ListContributorInsightsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContributorInsightsSummaries", elemType: shared.ContributorInsightsSummary })
  contributorInsightsSummaries?: ContributorInsightsSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
