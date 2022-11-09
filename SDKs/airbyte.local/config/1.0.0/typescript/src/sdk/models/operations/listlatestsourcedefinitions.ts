import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListLatestSourceDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sourceDefinitionReadList?: shared.SourceDefinitionReadList;

  @Metadata()
  statusCode: number;
}
