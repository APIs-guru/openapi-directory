import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrentRevision } from "./currentrevision";
import { ExecutionDetails } from "./executiondetails";



// PutThirdPartyJobSuccessResultInput
/** 
 * Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action.
**/
export class PutThirdPartyJobSuccessResultInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=continuationToken" })
  continuationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=currentRevision" })
  currentRevision?: CurrentRevision;

  @SpeakeasyMetadata({ data: "json, name=executionDetails" })
  executionDetails?: ExecutionDetails;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;
}
