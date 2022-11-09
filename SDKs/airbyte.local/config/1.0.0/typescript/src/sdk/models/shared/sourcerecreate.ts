import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SourceRecreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;

  @Metadata({ data: "json, name=sourceId" })
  sourceId: string;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
