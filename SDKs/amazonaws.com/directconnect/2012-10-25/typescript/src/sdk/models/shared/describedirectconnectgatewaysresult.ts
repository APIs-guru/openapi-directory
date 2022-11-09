import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectConnectGateway } from "./directconnectgateway";


export class DescribeDirectConnectGatewaysResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGateways", elemType: shared.DirectConnectGateway })
  directConnectGateways?: DirectConnectGateway[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
