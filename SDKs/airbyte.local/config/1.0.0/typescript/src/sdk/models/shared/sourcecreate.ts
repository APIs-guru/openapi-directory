import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SourceCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
