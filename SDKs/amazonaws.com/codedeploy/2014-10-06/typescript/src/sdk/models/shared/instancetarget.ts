import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetLabelEnum } from "./targetlabelenum";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";



// InstanceTarget
/** 
 *  A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform. 
**/
export class InstanceTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceLabel" })
  instanceLabel?: TargetLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lifecycleEvents", elemType: LifecycleEvent })
  lifecycleEvents?: LifecycleEvent[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TargetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;
}
