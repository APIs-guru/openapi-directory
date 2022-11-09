import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFileOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobId" })
  blobId: string;

  @Metadata({ data: "json, name=commitId" })
  commitId: string;

  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=treeId" })
  treeId: string;
}
