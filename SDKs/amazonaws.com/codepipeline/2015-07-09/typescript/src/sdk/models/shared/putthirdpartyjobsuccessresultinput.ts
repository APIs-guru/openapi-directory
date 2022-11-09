import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrentRevision } from "./currentrevision";
import { ExecutionDetails } from "./executiondetails";


// PutThirdPartyJobSuccessResultInput
/** 
 * Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action.
**/
export class PutThirdPartyJobSuccessResultInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=continuationToken" })
  continuationToken?: string;

  @Metadata({ data: "json, name=currentRevision" })
  currentRevision?: CurrentRevision;

  @Metadata({ data: "json, name=executionDetails" })
  executionDetails?: ExecutionDetails;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;
}
