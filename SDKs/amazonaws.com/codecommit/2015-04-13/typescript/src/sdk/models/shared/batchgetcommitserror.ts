import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetCommitsError
/** 
 * Returns information about errors in a BatchGetCommits operation.
**/
export class BatchGetCommitsError extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitId" })
  commitId?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
