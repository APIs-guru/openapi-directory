import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Artifact
/** 
 * A discrete item that contains the description and URL of an artifact (such as a PDF).
**/
export class Artifact extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  url?: string;
}
