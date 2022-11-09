import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";


export class DescribeMergeConflictsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=conflictDetailLevel" })
  conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;

  @Metadata({ data: "json, name=conflictResolutionStrategy" })
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;

  @Metadata({ data: "json, name=destinationCommitSpecifier" })
  destinationCommitSpecifier: string;

  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=maxMergeHunks" })
  maxMergeHunks?: number;

  @Metadata({ data: "json, name=mergeOption" })
  mergeOption: MergeOptionTypeEnumEnum;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=sourceCommitSpecifier" })
  sourceCommitSpecifier: string;
}
