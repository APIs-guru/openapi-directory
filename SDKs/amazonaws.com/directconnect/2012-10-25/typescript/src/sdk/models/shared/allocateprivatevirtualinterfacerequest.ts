import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewPrivateVirtualInterfaceAllocation } from "./newprivatevirtualinterfaceallocation";



export class AllocatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=newPrivateVirtualInterfaceAllocation" })
  newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;
}
