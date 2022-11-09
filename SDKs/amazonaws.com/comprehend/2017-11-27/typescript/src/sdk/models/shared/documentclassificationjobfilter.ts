import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


// DocumentClassificationJobFilter
/** 
 * Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request.
**/
export class DocumentClassificationJobFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=SubmitTimeAfter" })
  submitTimeAfter?: Date;

  @Metadata({ data: "json, name=SubmitTimeBefore" })
  submitTimeBefore?: Date;
}
