import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceDefinitionRead } from "./sourcedefinitionread";


export class SourceDefinitionReadList extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceDefinitions", elemType: shared.SourceDefinitionRead })
  sourceDefinitions: SourceDefinitionRead[];
}
