import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDirectConnectGatewayAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedGatewayId" })
  associatedGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=associationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;
}
