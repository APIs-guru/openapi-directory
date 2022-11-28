import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListLatestDestinationDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  destinationDefinitionReadList?: shared.DestinationDefinitionReadList;

  @SpeakeasyMetadata()
  statusCode: number;
}
