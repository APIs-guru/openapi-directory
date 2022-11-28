import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ArtifactLocation } from "./s3artifactlocation";
import { ArtifactLocationTypeEnum } from "./artifactlocationtypeenum";



// ArtifactLocation
/** 
 * Represents information about the location of an artifact.
**/
export class ArtifactLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Location" })
  s3Location?: S3ArtifactLocation;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ArtifactLocationTypeEnum;
}
