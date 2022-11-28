import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartOfSpeechTag } from "./partofspeechtag";



// SyntaxToken
/** 
 * Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.
**/
export class SyntaxToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=PartOfSpeech" })
  partOfSpeech?: PartOfSpeechTag;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenId" })
  tokenId?: number;
}
