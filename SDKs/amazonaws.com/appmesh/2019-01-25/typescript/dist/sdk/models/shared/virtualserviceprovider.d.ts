import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeServiceProvider } from "./virtualnodeserviceprovider";
import { VirtualRouterServiceProvider } from "./virtualrouterserviceprovider";
/**
 * An object that represents the provider for a virtual service.
**/
export declare class VirtualServiceProvider extends SpeakeasyBase {
    virtualNode?: VirtualNodeServiceProvider;
    virtualRouter?: VirtualRouterServiceProvider;
}
