import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetCommitsError
/** 
 * Returns information about errors in a BatchGetCommits operation.
**/
export class BatchGetCommitsError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
