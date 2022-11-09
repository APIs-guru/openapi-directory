import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImagePermissions } from "./imagepermissions";


export class UpdateImagePermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImagePermissions" })
  imagePermissions: ImagePermissions;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SharedAccountId" })
  sharedAccountId: string;
}
