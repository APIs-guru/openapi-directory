import { SpeakeasyBase } from "../../../internal/utils";
import { SentimentTypeEnum } from "./sentimenttypeenum";
import { SentimentScore } from "./sentimentscore";
export declare class DetectSentimentResponse extends SpeakeasyBase {
    sentiment?: SentimentTypeEnum;
    sentimentScore?: SentimentScore;
}
