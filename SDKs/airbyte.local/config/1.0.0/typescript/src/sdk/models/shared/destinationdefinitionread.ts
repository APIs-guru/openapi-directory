import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DestinationDefinitionRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;

  @Metadata({ data: "json, name=dockerImageTag" })
  dockerImageTag: string;

  @Metadata({ data: "json, name=dockerRepository" })
  dockerRepository: string;

  @Metadata({ data: "json, name=documentationUrl" })
  documentationUrl: string;

  @Metadata({ data: "json, name=icon" })
  icon?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
