import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewPublicVirtualInterfaceAllocation } from "./newpublicvirtualinterfaceallocation";



export class AllocatePublicVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=newPublicVirtualInterfaceAllocation" })
  newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;
}
