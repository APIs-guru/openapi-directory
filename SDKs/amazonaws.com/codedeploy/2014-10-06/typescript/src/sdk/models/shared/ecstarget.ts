import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";
import { EcsTaskSet } from "./ecstaskset";



// EcsTarget
/** 
 *  Information about the target of an Amazon ECS deployment. 
**/
export class EcsTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

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

  @SpeakeasyMetadata({ data: "json, name=taskSetsInfo", elemType: EcsTaskSet })
  taskSetsInfo?: EcsTaskSet[];
}
