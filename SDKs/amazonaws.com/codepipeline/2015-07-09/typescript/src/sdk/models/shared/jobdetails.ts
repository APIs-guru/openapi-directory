import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobData } from "./jobdata";



// JobDetails
/** 
 * Represents information about the details of a job.
**/
export class JobDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: JobData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
