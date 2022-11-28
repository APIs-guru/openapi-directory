import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeConnectionsOnInterconnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interconnectId" })
  interconnectId: string;
}
