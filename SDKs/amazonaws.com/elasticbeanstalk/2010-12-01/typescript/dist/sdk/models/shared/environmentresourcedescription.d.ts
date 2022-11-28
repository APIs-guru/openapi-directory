import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroup } from "./autoscalinggroup";
import { Instance } from "./instance";
import { LaunchConfiguration } from "./launchconfiguration";
import { LaunchTemplate } from "./launchtemplate";
import { LoadBalancer } from "./loadbalancer";
import { Queue } from "./queue";
import { Trigger } from "./trigger";
/**
 * Describes the AWS resources in use by this environment. This data is live.
**/
export declare class EnvironmentResourceDescription extends SpeakeasyBase {
    autoScalingGroups?: AutoScalingGroup[];
    environmentName?: string;
    instances?: Instance[];
    launchConfigurations?: LaunchConfiguration[];
    launchTemplates?: LaunchTemplate[];
    loadBalancers?: LoadBalancer[];
    queues?: Queue[];
    triggers?: Trigger[];
}
