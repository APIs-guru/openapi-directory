import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpRange } from "./iprange";
import { Ipv6Range } from "./ipv6range";
import { PrefixListId } from "./prefixlistid";
import { UserIdGroupPair } from "./useridgrouppair";



// IpPermission
/** 
 * Describes a set of permissions for a security group rule.
**/
export class IpPermission extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fromPort?: number;

  @SpeakeasyMetadata()
  ipProtocol?: string;

  @SpeakeasyMetadata({ elemType: IpRange })
  ipRanges?: IpRange[];

  @SpeakeasyMetadata({ elemType: Ipv6Range })
  ipv6Ranges?: Ipv6Range[];

  @SpeakeasyMetadata({ elemType: PrefixListId })
  prefixListIds?: PrefixListId[];

  @SpeakeasyMetadata()
  toPort?: number;

  @SpeakeasyMetadata({ elemType: UserIdGroupPair })
  userIdGroupPairs?: UserIdGroupPair[];
}
