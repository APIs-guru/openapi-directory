import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrentRevision } from "./currentrevision";
import { ExecutionDetails } from "./executiondetails";



// PutJobSuccessResultInput
/** 
 * Represents the input of a <code>PutJobSuccessResult</code> action.
**/
export class PutJobSuccessResultInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continuationToken" })
  continuationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=currentRevision" })
  currentRevision?: CurrentRevision;

  @SpeakeasyMetadata({ data: "json, name=executionDetails" })
  executionDetails?: ExecutionDetails;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=outputVariables" })
  outputVariables?: Map<string, string>;
}
