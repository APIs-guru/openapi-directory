import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualGateway } from "./virtualgateway";


export class VirtualGateways extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualGateways", elemType: shared.VirtualGateway })
  virtualGateways?: VirtualGateway[];
}
