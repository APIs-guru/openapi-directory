import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CharacterOffsets } from "./characteroffsets";


// IssueDetected
/** 
 * Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.
**/
export class IssueDetected extends SpeakeasyBase {
  @Metadata({ data: "json, name=CharacterOffsets" })
  characterOffsets: CharacterOffsets;
}
