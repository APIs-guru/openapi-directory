import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";



export class UpdateRoleDescriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  role?: Role;
}
