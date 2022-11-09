import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=associationId" })
  associationId?: string;

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;
}
