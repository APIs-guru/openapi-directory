import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NewPublicVirtualInterfaceAllocation } from "./newpublicvirtualinterfaceallocation";


export class AllocatePublicVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=newPublicVirtualInterfaceAllocation" })
  newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;
}
