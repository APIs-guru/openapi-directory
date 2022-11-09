import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobData } from "./jobdata";


// JobDetails
/** 
 * Represents information about the details of a job.
**/
export class JobDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=data" })
  data?: JobData;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
