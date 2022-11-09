import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";


// ArtifactDetail
/** 
 * Artifact details for the action execution, such as the artifact location.
**/
export class ArtifactDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=s3location" })
  s3location?: S3Location;
}
