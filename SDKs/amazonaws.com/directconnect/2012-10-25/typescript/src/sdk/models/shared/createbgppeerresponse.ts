import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualInterface } from "./virtualinterface";



export class CreateBgpPeerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualInterface" })
  virtualInterface?: VirtualInterface;
}
