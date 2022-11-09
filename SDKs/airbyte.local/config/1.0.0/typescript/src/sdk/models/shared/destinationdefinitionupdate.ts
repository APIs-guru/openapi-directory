import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DestinationDefinitionUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;

  @Metadata({ data: "json, name=dockerImageTag" })
  dockerImageTag?: string;
}
