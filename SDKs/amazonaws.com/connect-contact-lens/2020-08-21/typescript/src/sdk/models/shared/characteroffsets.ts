import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CharacterOffsets
/** 
 * For characters that were detected as issues, where they occur in the transcript.
**/
export class CharacterOffsets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BeginOffsetChar" })
  beginOffsetChar: number;

  @SpeakeasyMetadata({ data: "json, name=EndOffsetChar" })
  endOffsetChar: number;
}
