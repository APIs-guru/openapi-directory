import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceBuildInformation } from "./sourcebuildinformation";
import { S3Location } from "./s3location";
import { ApplicationVersionStatusEnum } from "./applicationversionstatusenum";



// ApplicationVersionDescription
/** 
 * Describes the properties of an application version.
**/
export class ApplicationVersionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationName?: string;

  @SpeakeasyMetadata()
  applicationVersionArn?: string;

  @SpeakeasyMetadata()
  buildArn?: string;

  @SpeakeasyMetadata()
  dateCreated?: Date;

  @SpeakeasyMetadata()
  dateUpdated?: Date;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  sourceBuildInformation?: SourceBuildInformation;

  @SpeakeasyMetadata()
  sourceBundle?: S3Location;

  @SpeakeasyMetadata()
  status?: ApplicationVersionStatusEnum;

  @SpeakeasyMetadata()
  versionLabel?: string;
}
