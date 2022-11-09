import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualInterfaceStateEnum } from "./virtualinterfacestateenum";


export class DeleteVirtualInterfaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualInterfaceState" })
  virtualInterfaceState?: VirtualInterfaceStateEnum;
}
