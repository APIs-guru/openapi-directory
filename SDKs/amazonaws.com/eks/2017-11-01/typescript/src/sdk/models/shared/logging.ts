import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogSetup } from "./logsetup";


// Logging
/** 
 * An object representing the logging configuration for resources in your cluster.
**/
export class Logging extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterLogging", elemType: shared.LogSetup })
  clusterLogging?: LogSetup[];
}
