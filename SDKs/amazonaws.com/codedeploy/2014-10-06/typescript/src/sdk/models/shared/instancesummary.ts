import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LifecycleEvent } from "./lifecycleevent";
import { InstanceStatusEnum } from "./instancestatusenum";


// InstanceSummary
/** 
 * Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead.
**/
export class InstanceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: InstanceTypeEnum;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=lifecycleEvents", elemType: shared.LifecycleEvent })
  lifecycleEvents?: LifecycleEvent[];

  @Metadata({ data: "json, name=status" })
  status?: InstanceStatusEnum;
}
