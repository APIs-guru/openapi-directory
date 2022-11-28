import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserIdGroupPair } from "./useridgrouppair";



// StaleIpPermission
/** 
 * Describes a stale rule in a security group.
**/
export class StaleIpPermission extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fromPort?: number;

  @SpeakeasyMetadata()
  ipProtocol?: string;

  @SpeakeasyMetadata()
  ipRanges?: string[];

  @SpeakeasyMetadata()
  prefixListIds?: string[];

  @SpeakeasyMetadata()
  toPort?: number;

  @SpeakeasyMetadata({ elemType: UserIdGroupPair })
  userIdGroupPairs?: UserIdGroupPair[];
}
