import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NewBgpPeer } from "./newbgppeer";


export class CreateBgpPeerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newBGPPeer" })
  newBgpPeer?: NewBgpPeer;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}
