import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociatedRole } from "./associatedrole";



export class GetAssociatedEnclaveCertificateIamRolesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AssociatedRole })
  associatedRoles?: AssociatedRole[];
}
