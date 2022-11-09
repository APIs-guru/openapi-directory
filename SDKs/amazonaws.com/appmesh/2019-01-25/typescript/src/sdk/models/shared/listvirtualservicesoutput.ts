import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualServiceRef } from "./virtualserviceref";


// ListVirtualServicesOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class ListVirtualServicesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=virtualServices", elemType: shared.VirtualServiceRef })
  virtualServices: VirtualServiceRef[];
}
