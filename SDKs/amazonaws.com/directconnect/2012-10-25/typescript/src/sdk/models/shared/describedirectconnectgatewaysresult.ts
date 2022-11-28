import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGateway } from "./directconnectgateway";



export class DescribeDirectConnectGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGateways", elemType: DirectConnectGateway })
  directConnectGateways?: DirectConnectGateway[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
