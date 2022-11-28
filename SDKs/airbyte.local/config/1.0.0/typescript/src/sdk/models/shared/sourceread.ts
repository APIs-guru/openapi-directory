import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SourceRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceName" })
  sourceName: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
