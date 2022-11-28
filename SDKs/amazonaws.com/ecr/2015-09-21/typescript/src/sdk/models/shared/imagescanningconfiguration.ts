import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageScanningConfiguration
/** 
 * The image scanning configuration for a repository.
**/
export class ImageScanningConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scanOnPush" })
  scanOnPush?: boolean;
}
