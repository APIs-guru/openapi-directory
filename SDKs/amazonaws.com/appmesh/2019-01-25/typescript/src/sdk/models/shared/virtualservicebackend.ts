import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientPolicy } from "./clientpolicy";


// VirtualServiceBackend
/** 
 * An object that represents a virtual service backend for a virtual node.
**/
export class VirtualServiceBackend extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientPolicy" })
  clientPolicy?: ClientPolicy;

  @Metadata({ data: "json, name=virtualServiceName" })
  virtualServiceName: string;
}
