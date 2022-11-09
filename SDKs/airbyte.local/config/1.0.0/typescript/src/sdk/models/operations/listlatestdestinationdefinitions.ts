import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListLatestDestinationDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  destinationDefinitionReadList?: shared.DestinationDefinitionReadList;

  @Metadata()
  statusCode: number;
}
