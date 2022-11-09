import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackendDefaults } from "./backenddefaults";
import { Backend } from "./backend";
import { Listener } from "./listener";
import { Logging } from "./logging";
import { ServiceDiscovery } from "./servicediscovery";


// VirtualNodeSpec
/** 
 * An object that represents the specification of a virtual node.
**/
export class VirtualNodeSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendDefaults" })
  backendDefaults?: BackendDefaults;

  @Metadata({ data: "json, name=backends", elemType: shared.Backend })
  backends?: Backend[];

  @Metadata({ data: "json, name=listeners", elemType: shared.Listener })
  listeners?: Listener[];

  @Metadata({ data: "json, name=logging" })
  logging?: Logging;

  @Metadata({ data: "json, name=serviceDiscovery" })
  serviceDiscovery?: ServiceDiscovery;
}
