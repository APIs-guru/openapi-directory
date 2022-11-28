import { SpeakeasyBase } from "../../../internal/utils";
import { CodeReviewSummary } from "./codereviewsummary";
export declare class ListCodeReviewsResponse extends SpeakeasyBase {
    codeReviewSummaries?: CodeReviewSummary[];
    nextToken?: string;
}
