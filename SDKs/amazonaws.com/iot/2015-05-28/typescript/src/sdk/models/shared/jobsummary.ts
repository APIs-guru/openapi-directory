import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { TargetSelectionEnum } from "./targetselectionenum";


// JobSummary
/** 
 * The job summary.
**/
export class JobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedAt" })
  completedAt?: Date;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @Metadata({ data: "json, name=targetSelection" })
  targetSelection?: TargetSelectionEnum;

  @Metadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;
}
