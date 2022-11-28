import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.
**/
export declare class AutoTerminationPolicy extends SpeakeasyBase {
    idleTimeout?: number;
}
