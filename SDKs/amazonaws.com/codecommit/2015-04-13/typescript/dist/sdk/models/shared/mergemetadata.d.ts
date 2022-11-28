import { SpeakeasyBase } from "../../../internal/utils";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";
/**
 * Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.
**/
export declare class MergeMetadata extends SpeakeasyBase {
    isMerged?: boolean;
    mergeCommitId?: string;
    mergeOption?: MergeOptionTypeEnumEnum;
    mergedBy?: string;
}
