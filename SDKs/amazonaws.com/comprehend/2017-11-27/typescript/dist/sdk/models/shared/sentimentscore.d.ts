import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.
**/
export declare class SentimentScore extends SpeakeasyBase {
    mixed?: number;
    negative?: number;
    neutral?: number;
    positive?: number;
}
