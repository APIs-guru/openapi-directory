import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputArtifact
/** 
 * Represents information about the output of an action.
**/
export class OutputArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
