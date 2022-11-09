import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DestinationCoreConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @Metadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;
}
