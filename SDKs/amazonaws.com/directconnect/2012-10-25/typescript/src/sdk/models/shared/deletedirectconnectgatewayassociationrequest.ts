import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;
}
