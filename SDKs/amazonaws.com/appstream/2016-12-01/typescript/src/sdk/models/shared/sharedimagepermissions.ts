import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImagePermissions } from "./imagepermissions";



// SharedImagePermissions
/** 
 * Describes the permissions that are available to the specified AWS account for a shared image.
**/
export class SharedImagePermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imagePermissions" })
  imagePermissions: ImagePermissions;

  @SpeakeasyMetadata({ data: "json, name=sharedAccountId" })
  sharedAccountId: string;
}
