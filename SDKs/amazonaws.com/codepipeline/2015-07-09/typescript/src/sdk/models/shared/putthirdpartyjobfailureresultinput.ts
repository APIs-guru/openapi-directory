import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";



// PutThirdPartyJobFailureResultInput
/** 
 * Represents the input of a <code>PutThirdPartyJobFailureResult</code> action.
**/
export class PutThirdPartyJobFailureResultInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=failureDetails" })
  failureDetails: FailureDetails;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;
}
