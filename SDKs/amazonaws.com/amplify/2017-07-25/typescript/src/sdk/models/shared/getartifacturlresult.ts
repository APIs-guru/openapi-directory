import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetArtifactUrlResult
/** 
 *  Returns the result structure for the get artifact request. 
**/
export class GetArtifactUrlResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "json, name=artifactUrl" })
  artifactUrl: string;
}
