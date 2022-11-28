import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewTransitVirtualInterface } from "./newtransitvirtualinterface";



export class CreateTransitVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=newTransitVirtualInterface" })
  newTransitVirtualInterface: NewTransitVirtualInterface;
}
