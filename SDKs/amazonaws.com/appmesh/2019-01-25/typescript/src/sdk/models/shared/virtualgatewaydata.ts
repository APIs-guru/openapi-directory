import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualGatewaySpec } from "./virtualgatewayspec";
import { VirtualGatewayStatus } from "./virtualgatewaystatus";


// VirtualGatewayData
/** 
 * An object that represents a virtual gateway returned by a describe operation.
**/
export class VirtualGatewayData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meshName" })
  meshName: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @Metadata({ data: "json, name=spec" })
  spec: VirtualGatewaySpec;

  @Metadata({ data: "json, name=status" })
  status: VirtualGatewayStatus;

  @Metadata({ data: "json, name=virtualGatewayName" })
  virtualGatewayName: string;
}
