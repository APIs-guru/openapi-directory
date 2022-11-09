import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Artifact
/** 
 *  Describes an artifact. 
**/
export class Artifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactFileName" })
  artifactFileName: string;

  @Metadata({ data: "json, name=artifactId" })
  artifactId: string;
}
