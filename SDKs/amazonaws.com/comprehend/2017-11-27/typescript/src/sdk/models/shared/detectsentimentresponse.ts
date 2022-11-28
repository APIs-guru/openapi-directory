import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SentimentTypeEnum } from "./sentimenttypeenum";
import { SentimentScore } from "./sentimentscore";



export class DetectSentimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Sentiment" })
  sentiment?: SentimentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SentimentScore" })
  sentimentScore?: SentimentScore;
}
