import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolution } from "./conflictresolution";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
export declare class MergeBranchesByThreeWayInput extends SpeakeasyBase {
    authorName?: string;
    commitMessage?: string;
    conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;
    conflictResolution?: ConflictResolution;
    conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;
    destinationCommitSpecifier: string;
    email?: string;
    keepEmptyFolders?: boolean;
    repositoryName: string;
    sourceCommitSpecifier: string;
    targetBranch?: string;
}
