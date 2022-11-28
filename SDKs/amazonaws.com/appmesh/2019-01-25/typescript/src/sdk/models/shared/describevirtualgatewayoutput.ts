import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayData } from "./virtualgatewaydata";



export class DescribeVirtualGatewayOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualGateway" })
  virtualGateway: VirtualGatewayData;
}
