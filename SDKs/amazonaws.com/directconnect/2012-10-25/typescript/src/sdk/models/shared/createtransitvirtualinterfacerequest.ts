import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NewTransitVirtualInterface } from "./newtransitvirtualinterface";


export class CreateTransitVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=newTransitVirtualInterface" })
  newTransitVirtualInterface: NewTransitVirtualInterface;
}
