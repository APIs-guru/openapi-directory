import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetailLevelTypeEnumEnum } from "./conflictdetailleveltypeenumenum";
import { ConflictResolution } from "./conflictresolution";
import { ConflictResolutionStrategyTypeEnumEnum } from "./conflictresolutionstrategytypeenumenum";



export class MergePullRequestBySquashInput extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=keepEmptyFolders" })
  keepEmptyFolders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitId" })
  sourceCommitId?: string;
}
