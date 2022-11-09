import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DefinitionInformation } from "./definitioninformation";


export class ListResourceDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Definitions", elemType: shared.DefinitionInformation })
  definitions?: DefinitionInformation[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
