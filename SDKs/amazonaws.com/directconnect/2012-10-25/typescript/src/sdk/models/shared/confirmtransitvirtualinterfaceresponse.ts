import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualInterfaceStateEnum } from "./virtualinterfacestateenum";



export class ConfirmTransitVirtualInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceState" })
  virtualInterfaceState?: VirtualInterfaceStateEnum;
}
