import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetArtifactUrlResult
/** 
 *  Returns the result structure for the get artifact request. 
**/
export class GetArtifactUrlResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactId" })
  artifactId: string;

  @Metadata({ data: "json, name=artifactUrl" })
  artifactUrl: string;
}
