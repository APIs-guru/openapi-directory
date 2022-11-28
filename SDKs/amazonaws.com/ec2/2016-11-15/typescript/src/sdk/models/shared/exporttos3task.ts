import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerFormatEnum } from "./containerformatenum";
import { DiskImageFormatEnum } from "./diskimageformatenum";



// ExportToS3Task
/** 
 * Describes the format and location for the export task.
**/
export class ExportToS3Task extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containerFormat?: ContainerFormatEnum;

  @SpeakeasyMetadata()
  diskImageFormat?: DiskImageFormatEnum;

  @SpeakeasyMetadata()
  s3Bucket?: string;

  @SpeakeasyMetadata()
  s3Key?: string;
}
