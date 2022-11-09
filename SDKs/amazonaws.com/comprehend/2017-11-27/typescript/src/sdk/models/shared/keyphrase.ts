import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyPhrase
/** 
 * Describes a key noun phrase.
**/
export class KeyPhrase extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=Score" })
  score?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;
}
