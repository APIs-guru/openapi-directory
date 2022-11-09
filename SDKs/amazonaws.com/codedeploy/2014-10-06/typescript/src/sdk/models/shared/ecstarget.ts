import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";
import { EcsTaskSet } from "./ecstaskset";


// EcsTarget
/** 
 *  Information about the target of an Amazon ECS deployment. 
**/
export class EcsTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

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

  @Metadata({ data: "json, name=taskSetsInfo", elemType: shared.EcsTaskSet })
  taskSetsInfo?: EcsTaskSet[];
}
