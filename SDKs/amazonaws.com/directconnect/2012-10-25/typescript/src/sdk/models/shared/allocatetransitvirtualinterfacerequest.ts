import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NewTransitVirtualInterfaceAllocation } from "./newtransitvirtualinterfaceallocation";


export class AllocateTransitVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=newTransitVirtualInterfaceAllocation" })
  newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;
}
