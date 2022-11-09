import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetLabelEnum } from "./targetlabelenum";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";


// InstanceTarget
/** 
 *  A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform. 
**/
export class InstanceTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=instanceLabel" })
  instanceLabel?: TargetLabelEnum;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=lifecycleEvents", elemType: shared.LifecycleEvent })
  lifecycleEvents?: LifecycleEvent[];

  @Metadata({ data: "json, name=status" })
  status?: TargetStatusEnum;

  @Metadata({ data: "json, name=targetArn" })
  targetArn?: string;

  @Metadata({ data: "json, name=targetId" })
  targetId?: string;
}
