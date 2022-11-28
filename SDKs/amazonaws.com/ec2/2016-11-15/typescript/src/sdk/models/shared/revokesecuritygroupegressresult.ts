import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpPermission } from "./ippermission";



export class RevokeSecurityGroupEgressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  return?: boolean;

  @SpeakeasyMetadata({ elemType: IpPermission })
  unknownIpPermissions?: IpPermission[];
}
