import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayRef } from "./virtualgatewayref";



export class ListVirtualGatewaysOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualGateways", elemType: VirtualGatewayRef })
  virtualGateways: VirtualGatewayRef[];
}
