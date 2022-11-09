import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDirectConnectGatewayAttachmentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}
