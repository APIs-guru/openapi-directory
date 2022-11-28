import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionInformation } from "./definitioninformation";
export declare class ListFunctionDefinitionsResponse extends SpeakeasyBase {
    definitions?: DefinitionInformation[];
    nextToken?: string;
}
