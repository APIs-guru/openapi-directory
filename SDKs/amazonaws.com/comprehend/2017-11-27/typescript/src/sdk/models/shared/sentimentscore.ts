import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SentimentScore
/** 
 * Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.
**/
export class SentimentScore extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mixed" })
  mixed?: number;

  @Metadata({ data: "json, name=Negative" })
  negative?: number;

  @Metadata({ data: "json, name=Neutral" })
  neutral?: number;

  @Metadata({ data: "json, name=Positive" })
  positive?: number;
}
