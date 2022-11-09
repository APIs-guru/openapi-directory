import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PartOfSpeechTag } from "./partofspeechtag";


// SyntaxToken
/** 
 * Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.
**/
export class SyntaxToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=PartOfSpeech" })
  partOfSpeech?: PartOfSpeechTag;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=TokenId" })
  tokenId?: number;
}
