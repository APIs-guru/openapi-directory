import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobError } from "./joberror";
import { JobStatusEnum } from "./jobstatusenum";


// JobDetails
/** 
 * Contains details about the policy generation request.
**/
export class JobDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedOn" })
  completedOn?: Date;

  @Metadata({ data: "json, name=jobError" })
  jobError?: JobError;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=startedOn" })
  startedOn: Date;

  @Metadata({ data: "json, name=status" })
  status: JobStatusEnum;
}
