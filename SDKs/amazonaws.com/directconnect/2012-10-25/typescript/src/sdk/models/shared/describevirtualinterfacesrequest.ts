import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVirtualInterfacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}
