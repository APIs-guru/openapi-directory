import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageTestsConfiguration
/** 
 * Image tests configuration.
**/
export class ImageTestsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageTestsEnabled" })
  imageTestsEnabled?: boolean;

  @Metadata({ data: "json, name=timeoutMinutes" })
  timeoutMinutes?: number;
}
