import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NewPublicVirtualInterface } from "./newpublicvirtualinterface";


export class CreatePublicVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=newPublicVirtualInterface" })
  newPublicVirtualInterface: NewPublicVirtualInterface;
}
