import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualRouterSpec } from "./virtualrouterspec";
import { VirtualRouterStatus } from "./virtualrouterstatus";


// VirtualRouterData
/** 
 * An object representing a virtual router returned by a describe operation.
**/
export class VirtualRouterData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meshName" })
  meshName: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ResourceMetadata;

  @Metadata({ data: "json, name=spec" })
  spec?: VirtualRouterSpec;

  @Metadata({ data: "json, name=status" })
  status?: VirtualRouterStatus;

  @Metadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}
