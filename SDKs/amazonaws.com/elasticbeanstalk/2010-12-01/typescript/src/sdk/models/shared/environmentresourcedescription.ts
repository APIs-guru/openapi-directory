import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroup } from "./autoscalinggroup";
import { Instance } from "./instance";
import { LaunchConfiguration } from "./launchconfiguration";
import { LaunchTemplate } from "./launchtemplate";
import { LoadBalancer } from "./loadbalancer";
import { Queue } from "./queue";
import { Trigger } from "./trigger";



// EnvironmentResourceDescription
/** 
 * Describes the AWS resources in use by this environment. This data is live.
**/
export class EnvironmentResourceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AutoScalingGroup })
  autoScalingGroups?: AutoScalingGroup[];

  @SpeakeasyMetadata()
  environmentName?: string;

  @SpeakeasyMetadata({ elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata({ elemType: LaunchConfiguration })
  launchConfigurations?: LaunchConfiguration[];

  @SpeakeasyMetadata({ elemType: LaunchTemplate })
  launchTemplates?: LaunchTemplate[];

  @SpeakeasyMetadata({ elemType: LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @SpeakeasyMetadata({ elemType: Queue })
  queues?: Queue[];

  @SpeakeasyMetadata({ elemType: Trigger })
  triggers?: Trigger[];
}
