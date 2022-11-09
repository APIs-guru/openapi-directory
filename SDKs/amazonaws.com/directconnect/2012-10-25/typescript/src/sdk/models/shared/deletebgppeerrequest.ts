import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBgpPeerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=asn" })
  asn?: number;

  @Metadata({ data: "json, name=bgpPeerId" })
  bgpPeerId?: string;

  @Metadata({ data: "json, name=customerAddress" })
  customerAddress?: string;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}
