import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { TargetSelectionEnum } from "./targetselectionenum";



// JobSummary
/** 
 * The job summary.
**/
export class JobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedAt" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetSelection" })
  targetSelection?: TargetSelectionEnum;

  @SpeakeasyMetadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;
}
