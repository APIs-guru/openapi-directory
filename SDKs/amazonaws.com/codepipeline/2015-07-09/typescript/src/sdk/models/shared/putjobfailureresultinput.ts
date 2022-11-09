import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureDetails } from "./failuredetails";


// PutJobFailureResultInput
/** 
 * Represents the input of a <code>PutJobFailureResult</code> action.
**/
export class PutJobFailureResultInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureDetails" })
  failureDetails: FailureDetails;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;
}
