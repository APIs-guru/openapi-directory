import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientPolicy } from "./clientpolicy";



// VirtualServiceBackend
/** 
 * An object that represents a virtual service backend for a virtual node.
**/
export class VirtualServiceBackend extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientPolicy" })
  clientPolicy?: ClientPolicy;

  @SpeakeasyMetadata({ data: "json, name=virtualServiceName" })
  virtualServiceName: string;
}
