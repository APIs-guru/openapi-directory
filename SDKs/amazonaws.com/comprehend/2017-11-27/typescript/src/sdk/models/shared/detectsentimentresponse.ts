import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SentimentTypeEnum } from "./sentimenttypeenum";
import { SentimentScore } from "./sentimentscore";


export class DetectSentimentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Sentiment" })
  sentiment?: SentimentTypeEnum;

  @Metadata({ data: "json, name=SentimentScore" })
  sentimentScore?: SentimentScore;
}
