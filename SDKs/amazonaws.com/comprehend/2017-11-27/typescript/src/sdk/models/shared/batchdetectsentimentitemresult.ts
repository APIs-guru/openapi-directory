import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SentimentTypeEnum } from "./sentimenttypeenum";
import { SentimentScore } from "./sentimentscore";


// BatchDetectSentimentItemResult
/** 
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export class BatchDetectSentimentItemResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Index" })
  index?: number;

  @Metadata({ data: "json, name=Sentiment" })
  sentiment?: SentimentTypeEnum;

  @Metadata({ data: "json, name=SentimentScore" })
  sentimentScore?: SentimentScore;
}
