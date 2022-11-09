import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputArtifact
/** 
 * Represents information about an artifact to be worked on, such as a test or build artifact.
**/
export class InputArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
