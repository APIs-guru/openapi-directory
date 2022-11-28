import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionInformation } from "./definitioninformation";
export declare class ListLoggerDefinitionsResponse extends SpeakeasyBase {
    definitions?: DefinitionInformation[];
    nextToken?: string;
}
