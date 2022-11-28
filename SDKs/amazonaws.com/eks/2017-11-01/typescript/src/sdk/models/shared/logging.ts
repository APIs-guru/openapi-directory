import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogSetup } from "./logsetup";



// Logging
/** 
 * An object representing the logging configuration for resources in your cluster.
**/
export class Logging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterLogging", elemType: LogSetup })
  clusterLogging?: LogSetup[];
}
