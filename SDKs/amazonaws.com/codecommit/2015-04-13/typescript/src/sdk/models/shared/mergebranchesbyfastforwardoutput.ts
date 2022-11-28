import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MergeBranchesByFastForwardOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=treeId" })
  treeId?: string;
}
