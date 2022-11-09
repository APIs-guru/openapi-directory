import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeReviewSummary } from "./codereviewsummary";
export declare class ListCodeReviewsResponse extends SpeakeasyBase {
    codeReviewSummaries?: CodeReviewSummary[];
    nextToken?: string;
}
