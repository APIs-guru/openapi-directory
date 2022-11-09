import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualRouterRef
/** 
 * An object representing a virtual router returned by a list operation.
**/
export class VirtualRouterRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=meshName" })
  meshName?: string;

  @Metadata({ data: "json, name=virtualRouterName" })
  virtualRouterName?: string;
}
