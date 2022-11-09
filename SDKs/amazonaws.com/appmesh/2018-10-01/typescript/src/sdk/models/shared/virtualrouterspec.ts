import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualRouterSpec
/** 
 * An object representing the specification of a virtual router.
**/
export class VirtualRouterSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceNames" })
  serviceNames?: string[];
}
