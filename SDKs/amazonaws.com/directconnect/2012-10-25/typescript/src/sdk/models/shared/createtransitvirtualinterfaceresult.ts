import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualInterface } from "./virtualinterface";


export class CreateTransitVirtualInterfaceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualInterface" })
  virtualInterface?: VirtualInterface;
}
