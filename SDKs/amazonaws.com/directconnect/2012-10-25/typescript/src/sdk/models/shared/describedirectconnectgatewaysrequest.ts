import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDirectConnectGatewaysRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
