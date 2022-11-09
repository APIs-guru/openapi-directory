import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfirmPublicVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
