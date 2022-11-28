import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfirmPublicVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
