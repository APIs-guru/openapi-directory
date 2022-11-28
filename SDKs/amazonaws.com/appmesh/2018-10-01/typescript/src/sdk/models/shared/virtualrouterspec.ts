import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualRouterSpec
/** 
 * An object representing the specification of a virtual router.
**/
export class VirtualRouterSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceNames" })
  serviceNames?: string[];
}
