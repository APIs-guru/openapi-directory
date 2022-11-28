import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportDestination } from "./exportdestination";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { JobStatusEnum } from "./jobstatusenum";



// RecommendationExportJob
/** 
 * <p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p>
**/
export class RecommendationExportJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: ExportDestination;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatusEnum;
}
