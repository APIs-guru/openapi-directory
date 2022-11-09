import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArtifactDetails
/** 
 * Returns information about the details of an artifact.
**/
export class ArtifactDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=maximumCount" })
  maximumCount: number;

  @Metadata({ data: "json, name=minimumCount" })
  minimumCount: number;
}
