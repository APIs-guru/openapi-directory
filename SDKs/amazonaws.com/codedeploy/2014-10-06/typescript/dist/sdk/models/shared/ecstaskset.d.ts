import { SpeakeasyBase } from "../../../internal/utils";
import { TargetGroupInfo } from "./targetgroupinfo";
import { TargetLabelEnum } from "./targetlabelenum";
/**
 *  Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set.
**/
export declare class EcsTaskSet extends SpeakeasyBase {
    desiredCount?: number;
    identifer?: string;
    pendingCount?: number;
    runningCount?: number;
    status?: string;
    targetGroup?: TargetGroupInfo;
    taskSetLabel?: TargetLabelEnum;
    trafficWeight?: number;
}
