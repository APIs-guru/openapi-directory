import { SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
/**
 * Information about a new BGP peer.
**/
export declare class NewBgpPeer extends SpeakeasyBase {
    addressFamily?: AddressFamilyEnum;
    amazonAddress?: string;
    asn?: number;
    authKey?: string;
    customerAddress?: string;
}
