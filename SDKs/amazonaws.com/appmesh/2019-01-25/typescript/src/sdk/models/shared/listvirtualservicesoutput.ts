import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceRef } from "./virtualserviceref";



// ListVirtualServicesOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class ListVirtualServicesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualServices", elemType: VirtualServiceRef })
  virtualServices: VirtualServiceRef[];
}
