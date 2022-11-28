import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImagePermissions } from "./imagepermissions";



export class UpdateImagePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImagePermissions" })
  imagePermissions: ImagePermissions;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SharedAccountId" })
  sharedAccountId: string;
}
