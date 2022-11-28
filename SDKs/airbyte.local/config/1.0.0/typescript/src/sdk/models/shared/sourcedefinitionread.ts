import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SourceDefinitionRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dockerImageTag" })
  dockerImageTag: string;

  @SpeakeasyMetadata({ data: "json, name=dockerRepository" })
  dockerRepository: string;

  @SpeakeasyMetadata({ data: "json, name=documentationUrl" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;
}
