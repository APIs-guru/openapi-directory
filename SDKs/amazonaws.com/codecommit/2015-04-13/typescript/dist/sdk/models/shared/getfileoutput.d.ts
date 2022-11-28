import { SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
export declare class GetFileOutput extends SpeakeasyBase {
    blobId: string;
    commitId: string;
    fileContent: string;
    fileMode: FileModeTypeEnumEnum;
    filePath: string;
    fileSize: number;
}
