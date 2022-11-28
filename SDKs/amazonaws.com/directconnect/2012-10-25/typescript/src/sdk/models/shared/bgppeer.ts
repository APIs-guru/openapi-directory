import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { BgpPeerStateEnum } from "./bgppeerstateenum";
import { BgpStatusEnum } from "./bgpstatusenum";



// BgpPeer
/** 
 * Information about a BGP peer.
**/
export class BgpPeer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @SpeakeasyMetadata({ data: "json, name=amazonAddress" })
  amazonAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=authKey" })
  authKey?: string;

  @SpeakeasyMetadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @SpeakeasyMetadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=bgpPeerId" })
  bgpPeerId?: string;

  @SpeakeasyMetadata({ data: "json, name=bgpPeerState" })
  bgpPeerState?: BgpPeerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=bgpStatus" })
  bgpStatus?: BgpStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=customerAddress" })
  customerAddress?: string;
}
