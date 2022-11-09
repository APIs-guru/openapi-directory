import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NewPrivateVirtualInterface } from "./newprivatevirtualinterface";


export class CreatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=newPrivateVirtualInterface" })
  newPrivateVirtualInterface: NewPrivateVirtualInterface;
}
