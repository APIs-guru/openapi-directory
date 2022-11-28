import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinationDefinitionRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;

  @SpeakeasyMetadata({ data: "json, name=dockerImageTag" })
  dockerImageTag: string;

  @SpeakeasyMetadata({ data: "json, name=dockerRepository" })
  dockerRepository: string;

  @SpeakeasyMetadata({ data: "json, name=documentationUrl" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
