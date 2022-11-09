import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayData } from "./virtualgatewaydata";


export class UpdateVirtualGatewayOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualGateway" })
  virtualGateway: VirtualGatewayData;
}
