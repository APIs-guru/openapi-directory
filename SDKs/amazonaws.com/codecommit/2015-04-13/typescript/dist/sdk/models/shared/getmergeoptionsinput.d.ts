import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
export declare class GetMergeOptionsInput extends SpeakeasyBase {
    conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;
    conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;
    destinationCommitSpecifier: string;
    repositoryName: string;
    sourceCommitSpecifier: string;
}
