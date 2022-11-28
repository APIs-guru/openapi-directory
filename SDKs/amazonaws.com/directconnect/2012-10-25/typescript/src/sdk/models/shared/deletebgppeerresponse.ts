import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualInterface } from "./virtualinterface";



export class DeleteBgpPeerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualInterface" })
  virtualInterface?: VirtualInterface;
}
