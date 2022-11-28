import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGateway } from "./virtualgateway";



export class VirtualGateways extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualGateways", elemType: VirtualGateway })
  virtualGateways?: VirtualGateway[];
}
