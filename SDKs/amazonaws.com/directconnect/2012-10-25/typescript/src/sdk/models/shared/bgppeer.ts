import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { BgpPeerStateEnum } from "./bgppeerstateenum";
import { BgpStatusEnum } from "./bgpstatusenum";


// BgpPeer
/** 
 * Information about a BGP peer.
**/
export class BgpPeer extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @Metadata({ data: "json, name=amazonAddress" })
  amazonAddress?: string;

  @Metadata({ data: "json, name=asn" })
  asn?: number;

  @Metadata({ data: "json, name=authKey" })
  authKey?: string;

  @Metadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @Metadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @Metadata({ data: "json, name=bgpPeerId" })
  bgpPeerId?: string;

  @Metadata({ data: "json, name=bgpPeerState" })
  bgpPeerState?: BgpPeerStateEnum;

  @Metadata({ data: "json, name=bgpStatus" })
  bgpStatus?: BgpStatusEnum;

  @Metadata({ data: "json, name=customerAddress" })
  customerAddress?: string;
}
