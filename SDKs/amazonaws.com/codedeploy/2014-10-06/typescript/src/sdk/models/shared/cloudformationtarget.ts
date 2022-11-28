import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";



// CloudFormationTarget
/** 
 *  Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
**/
export class CloudFormationTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lifecycleEvents", elemType: LifecycleEvent })
  lifecycleEvents?: LifecycleEvent[];

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TargetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetVersionWeight" })
  targetVersionWeight?: number;
}
