import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetGroupInfo } from "./targetgroupinfo";
import { TargetLabelEnum } from "./targetlabelenum";


// EcsTaskSet
/** 
 *  Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set. 
**/
export class EcsTaskSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=desiredCount" })
  desiredCount?: number;

  @Metadata({ data: "json, name=identifer" })
  identifer?: string;

  @Metadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @Metadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=targetGroup" })
  targetGroup?: TargetGroupInfo;

  @Metadata({ data: "json, name=taskSetLabel" })
  taskSetLabel?: TargetLabelEnum;

  @Metadata({ data: "json, name=trafficWeight" })
  trafficWeight?: number;
}
