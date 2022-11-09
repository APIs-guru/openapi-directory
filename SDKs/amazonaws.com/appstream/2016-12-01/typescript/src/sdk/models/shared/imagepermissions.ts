import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImagePermissions
/** 
 * Describes the permissions for an image. 
**/
export class ImagePermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowFleet" })
  allowFleet?: boolean;

  @Metadata({ data: "json, name=allowImageBuilder" })
  allowImageBuilder?: boolean;
}
