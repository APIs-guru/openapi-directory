import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StaleIpPermission } from "./staleippermission";



// StaleSecurityGroup
/** 
 * Describes a stale security group (a security group that contains stale rules).
**/
export class StaleSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  groupName?: string;

  @SpeakeasyMetadata({ elemType: StaleIpPermission })
  staleIpPermissions?: StaleIpPermission[];

  @SpeakeasyMetadata({ elemType: StaleIpPermission })
  staleIpPermissionsEgress?: StaleIpPermission[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
