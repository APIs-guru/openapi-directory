import { SpeakeasyBase } from "../../../internal/utils";
import { SentimentTypeEnum } from "./sentimenttypeenum";
import { SentimentScore } from "./sentimentscore";
/**
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export declare class BatchDetectSentimentItemResult extends SpeakeasyBase {
    index?: number;
    sentiment?: SentimentTypeEnum;
    sentimentScore?: SentimentScore;
}
