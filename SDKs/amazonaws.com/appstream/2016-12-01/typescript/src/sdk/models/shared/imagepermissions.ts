import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImagePermissions
/** 
 * Describes the permissions for an image. 
**/
export class ImagePermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowFleet" })
  allowFleet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowImageBuilder" })
  allowImageBuilder?: boolean;
}
