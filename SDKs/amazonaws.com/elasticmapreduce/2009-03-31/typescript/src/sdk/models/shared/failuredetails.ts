import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailureDetails
/** 
 * The details of the step failure. The service attempts to detect the root cause for many common failures.
**/
export class FailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogFile" })
  logFile?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;
}
