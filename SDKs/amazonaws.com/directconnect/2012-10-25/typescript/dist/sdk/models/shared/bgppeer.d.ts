import { SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { BgpPeerStateEnum } from "./bgppeerstateenum";
import { BgpStatusEnum } from "./bgpstatusenum";
/**
 * Information about a BGP peer.
**/
export declare class BgpPeer extends SpeakeasyBase {
    addressFamily?: AddressFamilyEnum;
    amazonAddress?: string;
    asn?: number;
    authKey?: string;
    awsDeviceV2?: string;
    awsLogicalDeviceId?: string;
    bgpPeerId?: string;
    bgpPeerState?: BgpPeerStateEnum;
    bgpStatus?: BgpStatusEnum;
    customerAddress?: string;
}
