import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualInterface } from "./virtualinterface";



export class AllocateTransitVirtualInterfaceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualInterface" })
  virtualInterface?: VirtualInterface;
}
