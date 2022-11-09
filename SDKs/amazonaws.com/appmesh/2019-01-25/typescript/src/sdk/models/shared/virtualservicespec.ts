import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualServiceProvider } from "./virtualserviceprovider";


// VirtualServiceSpec
/** 
 * An object that represents the specification of a virtual service.
**/
export class VirtualServiceSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=provider" })
  provider?: VirtualServiceProvider;
}
