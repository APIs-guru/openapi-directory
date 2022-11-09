import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageScanningConfiguration
/** 
 * The image scanning configuration for a repository.
**/
export class ImageScanningConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=scanOnPush" })
  scanOnPush?: boolean;
}
