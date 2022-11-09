import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureDetails } from "./failuredetails";


// PutThirdPartyJobFailureResultInput
/** 
 * Represents the input of a <code>PutThirdPartyJobFailureResult</code> action.
**/
export class PutThirdPartyJobFailureResultInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=failureDetails" })
  failureDetails: FailureDetails;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;
}
