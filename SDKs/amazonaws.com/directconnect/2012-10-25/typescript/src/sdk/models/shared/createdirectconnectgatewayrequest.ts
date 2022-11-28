import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDirectConnectGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amazonSideAsn" })
  amazonSideAsn?: number;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayName" })
  directConnectGatewayName: string;
}
