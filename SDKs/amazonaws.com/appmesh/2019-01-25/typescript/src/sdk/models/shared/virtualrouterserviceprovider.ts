import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualRouterServiceProvider
/** 
 * An object that represents a virtual node service provider.
**/
export class VirtualRouterServiceProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}
