import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewTransitVirtualInterfaceAllocation } from "./newtransitvirtualinterfaceallocation";



export class AllocateTransitVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=newTransitVirtualInterfaceAllocation" })
  newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;
}
