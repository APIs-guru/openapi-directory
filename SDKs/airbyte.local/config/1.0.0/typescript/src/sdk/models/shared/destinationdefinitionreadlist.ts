import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationDefinitionRead } from "./destinationdefinitionread";



export class DestinationDefinitionReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationDefinitions", elemType: DestinationDefinitionRead })
  destinationDefinitions: DestinationDefinitionRead[];
}
