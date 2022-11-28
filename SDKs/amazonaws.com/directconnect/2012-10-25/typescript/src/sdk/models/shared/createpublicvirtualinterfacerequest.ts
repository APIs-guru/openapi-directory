import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewPublicVirtualInterface } from "./newpublicvirtualinterface";



export class CreatePublicVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=newPublicVirtualInterface" })
  newPublicVirtualInterface: NewPublicVirtualInterface;
}
