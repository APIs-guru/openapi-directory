import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeConnectionsOnInterconnectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=interconnectId" })
  interconnectId: string;
}
