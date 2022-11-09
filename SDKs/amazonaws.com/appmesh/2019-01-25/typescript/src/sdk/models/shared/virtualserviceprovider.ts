import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualNodeServiceProvider } from "./virtualnodeserviceprovider";
import { VirtualRouterServiceProvider } from "./virtualrouterserviceprovider";


// VirtualServiceProvider
/** 
 * An object that represents the provider for a virtual service.
**/
export class VirtualServiceProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualNode" })
  virtualNode?: VirtualNodeServiceProvider;

  @Metadata({ data: "json, name=virtualRouter" })
  virtualRouter?: VirtualRouterServiceProvider;
}
