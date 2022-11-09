import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeConnectionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;
}
