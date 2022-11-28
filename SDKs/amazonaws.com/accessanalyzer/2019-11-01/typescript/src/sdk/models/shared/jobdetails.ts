import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobError } from "./joberror";
import { JobStatusEnum } from "./jobstatusenum";



// JobDetails
/** 
 * Contains details about the policy generation request.
**/
export class JobDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedOn" })
  completedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=jobError" })
  jobError?: JobError;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=startedOn" })
  startedOn: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: JobStatusEnum;
}
