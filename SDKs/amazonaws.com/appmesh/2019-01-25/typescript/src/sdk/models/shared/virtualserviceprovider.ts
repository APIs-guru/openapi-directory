import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeServiceProvider } from "./virtualnodeserviceprovider";
import { VirtualRouterServiceProvider } from "./virtualrouterserviceprovider";



// VirtualServiceProvider
/** 
 * An object that represents the provider for a virtual service.
**/
export class VirtualServiceProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualNode" })
  virtualNode?: VirtualNodeServiceProvider;

  @SpeakeasyMetadata({ data: "json, name=virtualRouter" })
  virtualRouter?: VirtualRouterServiceProvider;
}
