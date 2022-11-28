import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualRouterRef
/** 
 * An object representing a virtual router returned by a list operation.
**/
export class VirtualRouterRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualRouterName" })
  virtualRouterName?: string;
}
