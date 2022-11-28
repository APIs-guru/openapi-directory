import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnabledMetric } from "./enabledmetric";
import { Instance } from "./instance";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { MixedInstancesPolicy } from "./mixedinstancespolicy";
import { SuspendedProcess } from "./suspendedprocess";
import { TagDescription } from "./tagdescription";
import { WarmPoolConfiguration } from "./warmpoolconfiguration";



// AutoScalingGroup
/** 
 * Describes an Auto Scaling group.
**/
export class AutoScalingGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoScalingGroupArn?: string;

  @SpeakeasyMetadata()
  autoScalingGroupName: string;

  @SpeakeasyMetadata()
  availabilityZones: string[];

  @SpeakeasyMetadata()
  capacityRebalance?: boolean;

  @SpeakeasyMetadata()
  context?: string;

  @SpeakeasyMetadata()
  createdTime: Date;

  @SpeakeasyMetadata()
  defaultCooldown: number;

  @SpeakeasyMetadata()
  desiredCapacity: number;

  @SpeakeasyMetadata({ elemType: EnabledMetric })
  enabledMetrics?: EnabledMetric[];

  @SpeakeasyMetadata()
  healthCheckGracePeriod?: number;

  @SpeakeasyMetadata()
  healthCheckType: string;

  @SpeakeasyMetadata({ elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata()
  launchConfigurationName?: string;

  @SpeakeasyMetadata()
  launchTemplate?: LaunchTemplateSpecification;

  @SpeakeasyMetadata()
  loadBalancerNames?: string[];

  @SpeakeasyMetadata()
  maxInstanceLifetime?: number;

  @SpeakeasyMetadata()
  maxSize: number;

  @SpeakeasyMetadata()
  minSize: number;

  @SpeakeasyMetadata()
  mixedInstancesPolicy?: MixedInstancesPolicy;

  @SpeakeasyMetadata()
  newInstancesProtectedFromScaleIn?: boolean;

  @SpeakeasyMetadata()
  placementGroup?: string;

  @SpeakeasyMetadata()
  predictedCapacity?: number;

  @SpeakeasyMetadata()
  serviceLinkedRoleArn?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata({ elemType: SuspendedProcess })
  suspendedProcesses?: SuspendedProcess[];

  @SpeakeasyMetadata({ elemType: TagDescription })
  tags?: TagDescription[];

  @SpeakeasyMetadata()
  targetGroupArNs?: string[];

  @SpeakeasyMetadata()
  terminationPolicies?: string[];

  @SpeakeasyMetadata()
  vpcZoneIdentifier?: string;

  @SpeakeasyMetadata()
  warmPoolConfiguration?: WarmPoolConfiguration;

  @SpeakeasyMetadata()
  warmPoolSize?: number;
}
