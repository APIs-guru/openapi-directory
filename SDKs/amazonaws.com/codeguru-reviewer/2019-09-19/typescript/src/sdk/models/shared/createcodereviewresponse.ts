import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeReview } from "./codereview";



export class CreateCodeReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeReview" })
  codeReview?: CodeReview;
}
