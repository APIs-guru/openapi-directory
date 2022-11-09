import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportDestination } from "./exportdestination";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { JobStatusEnum } from "./jobstatusenum";


// RecommendationExportJob
/** 
 * <p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p>
**/
export class RecommendationExportJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @Metadata({ data: "json, name=destination" })
  destination?: ExportDestination;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: JobStatusEnum;
}
