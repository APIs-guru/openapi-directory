import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SentimentTypeEnum } from "./sentimenttypeenum";
import { SentimentScore } from "./sentimentscore";



// BatchDetectSentimentItemResult
/** 
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export class BatchDetectSentimentItemResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=Sentiment" })
  sentiment?: SentimentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SentimentScore" })
  sentimentScore?: SentimentScore;
}
