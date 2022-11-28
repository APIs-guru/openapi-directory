import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDirectConnectGatewaysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
