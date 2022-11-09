import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
