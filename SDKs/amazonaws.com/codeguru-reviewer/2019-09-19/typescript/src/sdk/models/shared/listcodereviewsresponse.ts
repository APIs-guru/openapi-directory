import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodeReviewSummary } from "./codereviewsummary";


export class ListCodeReviewsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeReviewSummaries", elemType: shared.CodeReviewSummary })
  codeReviewSummaries?: CodeReviewSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
