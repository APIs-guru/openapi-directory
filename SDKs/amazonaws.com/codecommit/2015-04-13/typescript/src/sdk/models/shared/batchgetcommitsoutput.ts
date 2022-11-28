import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Commit } from "./commit";
import { BatchGetCommitsError } from "./batchgetcommitserror";



export class BatchGetCommitsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commits", elemType: Commit })
  commits?: Commit[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchGetCommitsError })
  errors?: BatchGetCommitsError[];
}
