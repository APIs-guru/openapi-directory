import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolution } from "./conflictresolution";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
export declare class MergePullRequestBySquashInput extends SpeakeasyBase {
    authorName?: string;
    commitMessage?: string;
    conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;
    conflictResolution?: ConflictResolution;
    conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;
    email?: string;
    keepEmptyFolders?: boolean;
    pullRequestId: string;
    repositoryName: string;
    sourceCommitId?: string;
}
