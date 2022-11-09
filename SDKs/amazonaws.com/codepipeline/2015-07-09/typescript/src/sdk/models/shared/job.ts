import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobData } from "./jobdata";


// Job
/** 
 * Represents information about a job.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=data" })
  data?: JobData;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=nonce" })
  nonce?: string;
}
