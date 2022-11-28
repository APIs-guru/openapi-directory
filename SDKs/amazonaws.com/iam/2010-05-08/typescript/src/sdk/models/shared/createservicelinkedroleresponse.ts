import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";



export class CreateServiceLinkedRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  role?: Role;
}
