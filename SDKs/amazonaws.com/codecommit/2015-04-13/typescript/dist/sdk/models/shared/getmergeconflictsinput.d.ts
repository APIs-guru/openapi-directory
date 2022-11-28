import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";
export declare class GetMergeConflictsInput extends SpeakeasyBase {
    conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;
    conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;
    destinationCommitSpecifier: string;
    maxConflictFiles?: number;
    mergeOption: MergeOptionTypeEnumEnum;
    nextToken?: string;
    repositoryName: string;
    sourceCommitSpecifier: string;
}
