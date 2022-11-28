import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFileInput extends SpeakeasyBase {
    branchName: string;
    commitMessage?: string;
    email?: string;
    filePath: string;
    keepEmptyFolders?: boolean;
    name?: string;
    parentCommitId: string;
    repositoryName: string;
}
