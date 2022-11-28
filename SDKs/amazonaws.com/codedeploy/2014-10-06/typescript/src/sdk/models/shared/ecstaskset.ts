import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetGroupInfo } from "./targetgroupinfo";
import { TargetLabelEnum } from "./targetlabelenum";



// EcsTaskSet
/** 
 *  Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set. 
**/
export class EcsTaskSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desiredCount" })
  desiredCount?: number;

  @SpeakeasyMetadata({ data: "json, name=identifer" })
  identifer?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=targetGroup" })
  targetGroup?: TargetGroupInfo;

  @SpeakeasyMetadata({ data: "json, name=taskSetLabel" })
  taskSetLabel?: TargetLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=trafficWeight" })
  trafficWeight?: number;
}
