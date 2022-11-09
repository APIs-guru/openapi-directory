import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeHostedConnectionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;
}
