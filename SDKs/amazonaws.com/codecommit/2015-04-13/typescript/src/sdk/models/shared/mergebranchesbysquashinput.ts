import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolution } from "./conflictresolution";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";



export class MergeBranchesBySquashInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorName" })
  authorName?: string;

  @SpeakeasyMetadata({ data: "json, name=commitMessage" })
  commitMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=conflictDetailLevel" })
  conflictDetailLevel?: ConflictDetailLevelTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=conflictResolution" })
  conflictResolution?: ConflictResolution;

  @SpeakeasyMetadata({ data: "json, name=conflictResolutionStrategy" })
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationCommitSpecifier" })
  destinationCommitSpecifier: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=keepEmptyFolders" })
  keepEmptyFolders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitSpecifier" })
  sourceCommitSpecifier: string;

  @SpeakeasyMetadata({ data: "json, name=targetBranch" })
  targetBranch?: string;
}
