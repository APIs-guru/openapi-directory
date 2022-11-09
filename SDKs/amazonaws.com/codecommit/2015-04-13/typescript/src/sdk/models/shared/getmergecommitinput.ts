import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";


export class GetMergeCommitInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=conflictDetailLevel" })
  conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;

  @Metadata({ data: "json, name=conflictResolutionStrategy" })
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;

  @Metadata({ data: "json, name=destinationCommitSpecifier" })
  destinationCommitSpecifier: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=sourceCommitSpecifier" })
  sourceCommitSpecifier: string;
}
