import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMergeCommitOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseCommitId" })
  baseCommitId?: string;

  @Metadata({ data: "json, name=destinationCommitId" })
  destinationCommitId?: string;

  @Metadata({ data: "json, name=mergedCommitId" })
  mergedCommitId?: string;

  @Metadata({ data: "json, name=sourceCommitId" })
  sourceCommitId?: string;
}
