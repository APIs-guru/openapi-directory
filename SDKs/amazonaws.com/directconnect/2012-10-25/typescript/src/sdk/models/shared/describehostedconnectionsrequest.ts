import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeHostedConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;
}
