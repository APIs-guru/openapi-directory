import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolution } from "./conflictresolution";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";
export declare class CreateUnreferencedMergeCommitInput extends SpeakeasyBase {
    authorName?: string;
    commitMessage?: string;
    conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;
    conflictResolution?: ConflictResolution;
    conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;
    destinationCommitSpecifier: string;
    email?: string;
    keepEmptyFolders?: boolean;
    mergeOption: MergeOptionTypeEnumEnum;
    repositoryName: string;
    sourceCommitSpecifier: string;
}
