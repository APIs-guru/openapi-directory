import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeReviewSummary } from "./codereviewsummary";



export class ListCodeReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeReviewSummaries", elemType: CodeReviewSummary })
  codeReviewSummaries?: CodeReviewSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
