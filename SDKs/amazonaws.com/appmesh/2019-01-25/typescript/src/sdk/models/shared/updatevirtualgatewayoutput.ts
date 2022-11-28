import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayData } from "./virtualgatewaydata";



export class UpdateVirtualGatewayOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualGateway" })
  virtualGateway: VirtualGatewayData;
}
