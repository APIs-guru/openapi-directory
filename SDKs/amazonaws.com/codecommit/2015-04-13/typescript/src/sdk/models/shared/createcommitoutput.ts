import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileMetadata } from "./filemetadata";
import { FileMetadata } from "./filemetadata";
import { FileMetadata } from "./filemetadata";


export class CreateCommitOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitId" })
  commitId?: string;

  @Metadata({ data: "json, name=filesAdded", elemType: shared.FileMetadata })
  filesAdded?: FileMetadata[];

  @Metadata({ data: "json, name=filesDeleted", elemType: shared.FileMetadata })
  filesDeleted?: FileMetadata[];

  @Metadata({ data: "json, name=filesUpdated", elemType: shared.FileMetadata })
  filesUpdated?: FileMetadata[];

  @Metadata({ data: "json, name=treeId" })
  treeId?: string;
}
