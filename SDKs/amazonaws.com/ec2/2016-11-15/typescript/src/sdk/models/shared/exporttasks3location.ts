import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportTaskS3Location
/** 
 * Describes the destination for an export image task.
**/
export class ExportTaskS3Location extends SpeakeasyBase {
  @SpeakeasyMetadata()
  s3Bucket?: string;

  @SpeakeasyMetadata()
  s3Prefix?: string;
}
