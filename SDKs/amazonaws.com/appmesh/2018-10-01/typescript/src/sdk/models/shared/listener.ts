import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HealthCheckPolicy } from "./healthcheckpolicy";
import { PortMapping } from "./portmapping";


// Listener
/** 
 * An object representing a listener for a virtual node.
**/
export class Listener extends SpeakeasyBase {
  @Metadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheckPolicy;

  @Metadata({ data: "json, name=portMapping" })
  portMapping?: PortMapping;
}
