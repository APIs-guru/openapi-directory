import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListSourceDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceDefinitionReadList?: shared.SourceDefinitionReadList;

  @SpeakeasyMetadata()
  statusCode: number;
}
