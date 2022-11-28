import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageTestsConfiguration
/** 
 * Image tests configuration.
**/
export class ImageTestsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageTestsEnabled" })
  imageTestsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeoutMinutes" })
  timeoutMinutes?: number;
}
