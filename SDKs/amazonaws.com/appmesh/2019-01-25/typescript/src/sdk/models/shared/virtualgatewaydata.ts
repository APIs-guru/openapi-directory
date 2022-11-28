import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualGatewaySpec } from "./virtualgatewayspec";
import { VirtualGatewayStatus } from "./virtualgatewaystatus";



// VirtualGatewayData
/** 
 * An object that represents a virtual gateway returned by a describe operation.
**/
export class VirtualGatewayData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: ResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: VirtualGatewaySpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: VirtualGatewayStatus;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayName" })
  virtualGatewayName: string;
}
