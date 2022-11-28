import { SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
export declare class PutFileInput extends SpeakeasyBase {
    branchName: string;
    commitMessage?: string;
    email?: string;
    fileContent: string;
    fileMode?: FileModeTypeEnumEnum;
    filePath: string;
    name?: string;
    parentCommitId?: string;
    repositoryName: string;
}
