import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayData } from "./virtualgatewaydata";



export class DeleteVirtualGatewayOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualGateway" })
  virtualGateway: VirtualGatewayData;
}
