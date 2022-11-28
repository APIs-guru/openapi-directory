import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefinitionInformation } from "./definitioninformation";



export class ListFunctionDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Definitions", elemType: DefinitionInformation })
  definitions?: DefinitionInformation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
