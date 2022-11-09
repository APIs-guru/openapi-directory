import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrentRevision } from "./currentrevision";
import { ExecutionDetails } from "./executiondetails";


// PutJobSuccessResultInput
/** 
 * Represents the input of a <code>PutJobSuccessResult</code> action.
**/
export class PutJobSuccessResultInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=continuationToken" })
  continuationToken?: string;

  @Metadata({ data: "json, name=currentRevision" })
  currentRevision?: CurrentRevision;

  @Metadata({ data: "json, name=executionDetails" })
  executionDetails?: ExecutionDetails;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=outputVariables" })
  outputVariables?: Map<string, string>;
}
