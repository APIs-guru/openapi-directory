import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileMetadata } from "./filemetadata";



export class CreateCommitOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=filesAdded", elemType: FileMetadata })
  filesAdded?: FileMetadata[];

  @SpeakeasyMetadata({ data: "json, name=filesDeleted", elemType: FileMetadata })
  filesDeleted?: FileMetadata[];

  @SpeakeasyMetadata({ data: "json, name=filesUpdated", elemType: FileMetadata })
  filesUpdated?: FileMetadata[];

  @SpeakeasyMetadata({ data: "json, name=treeId" })
  treeId?: string;
}
