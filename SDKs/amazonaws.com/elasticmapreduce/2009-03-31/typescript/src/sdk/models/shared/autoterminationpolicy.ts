import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoTerminationPolicy
/** 
 * An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.
**/
export class AutoTerminationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdleTimeout" })
  idleTimeout?: number;
}
