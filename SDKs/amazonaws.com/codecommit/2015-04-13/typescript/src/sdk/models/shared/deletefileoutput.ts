import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFileOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobId" })
  blobId: string;

  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId: string;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;

  @SpeakeasyMetadata({ data: "json, name=treeId" })
  treeId: string;
}
