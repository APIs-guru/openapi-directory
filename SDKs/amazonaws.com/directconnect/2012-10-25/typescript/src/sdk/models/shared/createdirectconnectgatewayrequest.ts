import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDirectConnectGatewayRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amazonSideAsn" })
  amazonSideAsn?: number;

  @Metadata({ data: "json, name=directConnectGatewayName" })
  directConnectGatewayName: string;
}
