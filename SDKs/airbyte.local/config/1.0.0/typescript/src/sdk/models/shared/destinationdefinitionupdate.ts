import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinationDefinitionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationDefinitionId" })
  destinationDefinitionId: string;

  @SpeakeasyMetadata({ data: "json, name=dockerImageTag" })
  dockerImageTag?: string;
}
