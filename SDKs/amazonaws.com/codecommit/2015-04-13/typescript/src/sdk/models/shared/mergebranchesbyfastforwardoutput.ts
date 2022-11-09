import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MergeBranchesByFastForwardOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitId" })
  commitId?: string;

  @Metadata({ data: "json, name=treeId" })
  treeId?: string;
}
