import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteFileEntry } from "./deletefileentry";
import { PutFileEntry } from "./putfileentry";
import { SetFileModeEntry } from "./setfilemodeentry";
export declare class CreateCommitInput extends SpeakeasyBase {
    authorName?: string;
    branchName: string;
    commitMessage?: string;
    deleteFiles?: DeleteFileEntry[];
    email?: string;
    keepEmptyFolders?: boolean;
    parentCommitId?: string;
    putFiles?: PutFileEntry[];
    repositoryName: string;
    setFileModes?: SetFileModeEntry[];
}
