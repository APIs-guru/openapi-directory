import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArtifactDetails
/** 
 * Returns information about the details of an artifact.
**/
export class ArtifactDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maximumCount" })
  maximumCount: number;

  @SpeakeasyMetadata({ data: "json, name=minimumCount" })
  minimumCount: number;
}
