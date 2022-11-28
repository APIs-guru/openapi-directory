import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceProvider } from "./virtualserviceprovider";



// VirtualServiceSpec
/** 
 * An object that represents the specification of a virtual service.
**/
export class VirtualServiceSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: VirtualServiceProvider;
}
