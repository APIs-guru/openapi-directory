import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NewPrivateVirtualInterfaceAllocation } from "./newprivatevirtualinterfaceallocation";


export class AllocatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=newPrivateVirtualInterfaceAllocation" })
  newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;
}
