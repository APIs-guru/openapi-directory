import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImagePermissions } from "./imagepermissions";


// SharedImagePermissions
/** 
 * Describes the permissions that are available to the specified AWS account for a shared image.
**/
export class SharedImagePermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=imagePermissions" })
  imagePermissions: ImagePermissions;

  @Metadata({ data: "json, name=sharedAccountId" })
  sharedAccountId: string;
}
