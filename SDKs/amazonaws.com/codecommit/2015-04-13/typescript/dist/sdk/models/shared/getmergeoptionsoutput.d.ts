import { SpeakeasyBase } from "../../../internal/utils";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";
export declare class GetMergeOptionsOutput extends SpeakeasyBase {
    baseCommitId: string;
    destinationCommitId: string;
    mergeOptions: MergeOptionTypeEnumEnum[];
    sourceCommitId: string;
}
