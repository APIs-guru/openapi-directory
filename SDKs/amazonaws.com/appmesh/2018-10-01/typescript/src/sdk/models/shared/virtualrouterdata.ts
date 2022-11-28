import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualRouterSpec } from "./virtualrouterspec";
import { VirtualRouterStatus } from "./virtualrouterstatus";



// VirtualRouterData
/** 
 * An object representing a virtual router returned by a describe operation.
**/
export class VirtualRouterData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: VirtualRouterSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VirtualRouterStatus;

  @SpeakeasyMetadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}
