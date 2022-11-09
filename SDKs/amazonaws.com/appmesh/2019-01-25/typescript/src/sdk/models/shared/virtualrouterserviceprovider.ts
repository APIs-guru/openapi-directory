import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualRouterServiceProvider
/** 
 * An object that represents a virtual node service provider.
**/
export class VirtualRouterServiceProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}
