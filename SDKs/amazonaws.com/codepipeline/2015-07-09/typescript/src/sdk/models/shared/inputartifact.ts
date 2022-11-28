import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputArtifact
/** 
 * Represents information about an artifact to be worked on, such as a test or build artifact.
**/
export class InputArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
