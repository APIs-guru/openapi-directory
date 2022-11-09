import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeReview } from "./codereview";


export class CreateCodeReviewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeReview" })
  codeReview?: CodeReview;
}
