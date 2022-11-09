import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolution } from "./conflictresolution";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";


export class CreateUnreferencedMergeCommitInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorName" })
  authorName?: string;

  @Metadata({ data: "json, name=commitMessage" })
  commitMessage?: string;

  @Metadata({ data: "json, name=conflictDetailLevel" })
  conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;

  @Metadata({ data: "json, name=conflictResolution" })
  conflictResolution?: ConflictResolution;

  @Metadata({ data: "json, name=conflictResolutionStrategy" })
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;

  @Metadata({ data: "json, name=destinationCommitSpecifier" })
  destinationCommitSpecifier: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=keepEmptyFolders" })
  keepEmptyFolders?: boolean;

  @Metadata({ data: "json, name=mergeOption" })
  mergeOption: MergeOptionTypeEnumEnum;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=sourceCommitSpecifier" })
  sourceCommitSpecifier: string;
}
