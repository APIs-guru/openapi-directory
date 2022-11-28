import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SentimentScore
/** 
 * Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.
**/
export class SentimentScore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mixed" })
  mixed?: number;

  @SpeakeasyMetadata({ data: "json, name=Negative" })
  negative?: number;

  @SpeakeasyMetadata({ data: "json, name=Neutral" })
  neutral?: number;

  @SpeakeasyMetadata({ data: "json, name=Positive" })
  positive?: number;
}
