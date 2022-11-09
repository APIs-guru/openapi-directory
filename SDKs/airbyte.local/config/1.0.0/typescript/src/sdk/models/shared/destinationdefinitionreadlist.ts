import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationDefinitionRead } from "./destinationdefinitionread";


export class DestinationDefinitionReadList extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationDefinitions", elemType: shared.DestinationDefinitionRead })
  destinationDefinitions: DestinationDefinitionRead[];
}
