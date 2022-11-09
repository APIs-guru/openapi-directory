import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CharacterOffsets
/** 
 * For characters that were detected as issues, where they occur in the transcript.
**/
export class CharacterOffsets extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginOffsetChar" })
  beginOffsetChar: number;

  @Metadata({ data: "json, name=EndOffsetChar" })
  endOffsetChar: number;
}
