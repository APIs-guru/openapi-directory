import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";



// PutJobFailureResultInput
/** 
 * Represents the input of a <code>PutJobFailureResult</code> action.
**/
export class PutJobFailureResultInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureDetails" })
  failureDetails: FailureDetails;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;
}
