import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";


// NewBgpPeer
/** 
 * Information about a new BGP peer.
**/
export class NewBgpPeer extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @Metadata({ data: "json, name=amazonAddress" })
  amazonAddress?: string;

  @Metadata({ data: "json, name=asn" })
  asn?: number;

  @Metadata({ data: "json, name=authKey" })
  authKey?: string;

  @Metadata({ data: "json, name=customerAddress" })
  customerAddress?: string;
}
