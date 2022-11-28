import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinationCoreConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @SpeakeasyMetadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;
}
