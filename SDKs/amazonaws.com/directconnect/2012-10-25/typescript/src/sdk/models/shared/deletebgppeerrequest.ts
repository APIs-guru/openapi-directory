import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBgpPeerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=bgpPeerId" })
  bgpPeerId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerAddress" })
  customerAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}
