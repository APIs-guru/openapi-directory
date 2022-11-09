import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


// ComprehendMedicalAsyncJobFilter
/** 
 * Provides information for filtering a list of detection jobs.
**/
export class ComprehendMedicalAsyncJobFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=SubmitTimeAfter" })
  submitTimeAfter?: Date;

  @Metadata({ data: "json, name=SubmitTimeBefore" })
  submitTimeBefore?: Date;
}
