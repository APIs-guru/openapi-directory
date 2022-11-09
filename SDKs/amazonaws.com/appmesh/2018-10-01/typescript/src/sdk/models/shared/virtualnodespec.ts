import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Listener } from "./listener";
import { ServiceDiscovery } from "./servicediscovery";


// VirtualNodeSpec
/** 
 * An object representing the specification of a virtual node.
**/
export class VirtualNodeSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=backends" })
  backends?: string[];

  @Metadata({ data: "json, name=listeners", elemType: shared.Listener })
  listeners?: Listener[];

  @Metadata({ data: "json, name=serviceDiscovery" })
  serviceDiscovery?: ServiceDiscovery;
}
