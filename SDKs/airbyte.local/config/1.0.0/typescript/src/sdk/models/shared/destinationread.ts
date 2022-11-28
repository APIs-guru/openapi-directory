import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinationRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @SpeakeasyMetadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;

  @SpeakeasyMetadata({ data: "json, name=destinationId" })
  destinationId: string;

  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
