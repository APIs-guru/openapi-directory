import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LifecycleEvent } from "./lifecycleevent";
import { InstanceStatusEnum } from "./instancestatusenum";



// InstanceSummary
/** 
 * Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead.
**/
export class InstanceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lifecycleEvents", elemType: LifecycleEvent })
  lifecycleEvents?: LifecycleEvent[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: InstanceStatusEnum;
}
