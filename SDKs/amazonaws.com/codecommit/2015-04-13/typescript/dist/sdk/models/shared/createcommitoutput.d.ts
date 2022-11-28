import { SpeakeasyBase } from "../../../internal/utils";
import { FileMetadata } from "./filemetadata";
export declare class CreateCommitOutput extends SpeakeasyBase {
    commitId?: string;
    filesAdded?: FileMetadata[];
    filesDeleted?: FileMetadata[];
    filesUpdated?: FileMetadata[];
    treeId?: string;
}
