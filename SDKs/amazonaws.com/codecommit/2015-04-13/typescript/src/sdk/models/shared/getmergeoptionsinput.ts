import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";



export class GetMergeOptionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conflictDetailLevel" })
  conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=conflictResolutionStrategy" })
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationCommitSpecifier" })
  destinationCommitSpecifier: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitSpecifier" })
  sourceCommitSpecifier: string;
}
