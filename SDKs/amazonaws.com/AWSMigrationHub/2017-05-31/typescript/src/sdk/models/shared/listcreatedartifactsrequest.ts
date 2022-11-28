import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListCreatedArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
