import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpPermission } from "./ippermission";
import { Tag } from "./tag";



// SecurityGroup
/** 
 * Describes a security group.
**/
export class SecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  groupName?: string;

  @SpeakeasyMetadata({ elemType: IpPermission })
  ipPermissions?: IpPermission[];

  @SpeakeasyMetadata({ elemType: IpPermission })
  ipPermissionsEgress?: IpPermission[];

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
