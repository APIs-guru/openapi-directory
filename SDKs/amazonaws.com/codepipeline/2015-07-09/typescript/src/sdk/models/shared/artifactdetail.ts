import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";



// ArtifactDetail
/** 
 * Artifact details for the action execution, such as the artifact location.
**/
export class ArtifactDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=s3location" })
  s3location?: S3Location;
}
