import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartOfSpeechTagTypeEnum } from "./partofspeechtagtypeenum";



// PartOfSpeechTag
/** 
 * Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>.
**/
export class PartOfSpeechTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Tag" })
  tag?: PartOfSpeechTagTypeEnum;
}
