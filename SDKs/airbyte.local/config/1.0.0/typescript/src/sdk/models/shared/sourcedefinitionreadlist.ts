import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceDefinitionRead } from "./sourcedefinitionread";



export class SourceDefinitionReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceDefinitions", elemType: SourceDefinitionRead })
  sourceDefinitions: SourceDefinitionRead[];
}
