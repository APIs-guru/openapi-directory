import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputArtifact
/** 
 * Represents information about the output of an action.
**/
export class OutputArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
