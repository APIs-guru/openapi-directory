import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";



export class BatchDescribeMergeConflictsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conflictDetailLevel" })
  conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=conflictResolutionStrategy" })
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationCommitSpecifier" })
  destinationCommitSpecifier: string;

  @SpeakeasyMetadata({ data: "json, name=filePaths" })
  filePaths?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxConflictFiles" })
  maxConflictFiles?: number;

  @SpeakeasyMetadata({ data: "json, name=maxMergeHunks" })
  maxMergeHunks?: number;

  @SpeakeasyMetadata({ data: "json, name=mergeOption" })
  mergeOption: MergeOptionTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitSpecifier" })
  sourceCommitSpecifier: string;
}
