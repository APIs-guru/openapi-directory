import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportDestination } from "./exportdestination";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * <p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p>
**/
export declare class RecommendationExportJob extends SpeakeasyBase {
    creationTimestamp?: Date;
    destination?: ExportDestination;
    failureReason?: string;
    jobId?: string;
    lastUpdatedTimestamp?: Date;
    resourceType?: ResourceTypeEnum;
    status?: JobStatusEnum;
}
