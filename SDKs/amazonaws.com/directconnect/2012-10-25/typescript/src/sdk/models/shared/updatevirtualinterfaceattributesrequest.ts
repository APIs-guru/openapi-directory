import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateVirtualInterfaceAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mtu" })
  mtu?: number;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
