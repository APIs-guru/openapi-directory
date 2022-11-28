import { SpeakeasyBase } from "../../../internal/utils";
import { LogSetup } from "./logsetup";
/**
 * An object representing the logging configuration for resources in your cluster.
**/
export declare class Logging extends SpeakeasyBase {
    clusterLogging?: LogSetup[];
}
