import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthCheckPolicy } from "./healthcheckpolicy";
import { PortMapping } from "./portmapping";



// Listener
/** 
 * An object representing a listener for a virtual node.
**/
export class Listener extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheckPolicy;

  @SpeakeasyMetadata({ data: "json, name=portMapping" })
  portMapping?: PortMapping;
}
