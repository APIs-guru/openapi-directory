import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";



// NewBgpPeer
/** 
 * Information about a new BGP peer.
**/
export class NewBgpPeer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @SpeakeasyMetadata({ data: "json, name=amazonAddress" })
  amazonAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=authKey" })
  authKey?: string;

  @SpeakeasyMetadata({ data: "json, name=customerAddress" })
  customerAddress?: string;
}
