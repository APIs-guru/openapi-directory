import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MergeBranchesBySquashOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=treeId" })
  treeId?: string;
}
