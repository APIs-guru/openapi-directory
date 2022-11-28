import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailureDetails
/** 
 * The details of the step failure. The service attempts to detect the root cause for many common failures.
**/
export class FailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogFile" })
  logFile?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;
}
