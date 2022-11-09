import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateUnreferencedMergeCommitOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitId" })
  commitId?: string;

  @Metadata({ data: "json, name=treeId" })
  treeId?: string;
}
