import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateVirtualInterfaceAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mtu" })
  mtu?: number;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
