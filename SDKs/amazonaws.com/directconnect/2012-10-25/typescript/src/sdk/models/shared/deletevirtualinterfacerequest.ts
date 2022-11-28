import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
