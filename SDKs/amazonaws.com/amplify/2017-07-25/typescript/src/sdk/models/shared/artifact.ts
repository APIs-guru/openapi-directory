import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Artifact
/** 
 *  Describes an artifact. 
**/
export class Artifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactFileName" })
  artifactFileName: string;

  @SpeakeasyMetadata({ data: "json, name=artifactId" })
  artifactId: string;
}
