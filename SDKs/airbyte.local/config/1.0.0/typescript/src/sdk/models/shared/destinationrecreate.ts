import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DestinationRecreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @Metadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;

  @Metadata({ data: "json, name=destinationId" })
  destinationId: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
