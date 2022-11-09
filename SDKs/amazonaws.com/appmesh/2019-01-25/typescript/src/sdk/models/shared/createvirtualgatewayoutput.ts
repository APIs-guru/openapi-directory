import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayData } from "./virtualgatewaydata";


export class CreateVirtualGatewayOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualGateway" })
  virtualGateway: VirtualGatewayData;
}
