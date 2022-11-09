import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualGatewayRef } from "./virtualgatewayref";


export class ListVirtualGatewaysOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=virtualGateways", elemType: shared.VirtualGatewayRef })
  virtualGateways: VirtualGatewayRef[];
}
