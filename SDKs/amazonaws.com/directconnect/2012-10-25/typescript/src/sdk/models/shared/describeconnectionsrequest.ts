import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;
}
