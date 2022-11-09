import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Commit } from "./commit";
import { BatchGetCommitsError } from "./batchgetcommitserror";


export class BatchGetCommitsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commits", elemType: shared.Commit })
  commits?: Commit[];

  @Metadata({ data: "json, name=errors", elemType: shared.BatchGetCommitsError })
  errors?: BatchGetCommitsError[];
}
