import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyPhrase
/** 
 * Describes a key noun phrase.
**/
export class KeyPhrase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=EndOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;
}
