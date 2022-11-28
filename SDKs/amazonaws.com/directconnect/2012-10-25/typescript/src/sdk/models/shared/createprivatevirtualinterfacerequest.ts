import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewPrivateVirtualInterface } from "./newprivatevirtualinterface";



export class CreatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=newPrivateVirtualInterface" })
  newPrivateVirtualInterface: NewPrivateVirtualInterface;
}
