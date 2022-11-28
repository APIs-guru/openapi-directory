import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobData } from "./jobdata";



// Job
/** 
 * Represents information about a job.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: JobData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce?: string;
}
