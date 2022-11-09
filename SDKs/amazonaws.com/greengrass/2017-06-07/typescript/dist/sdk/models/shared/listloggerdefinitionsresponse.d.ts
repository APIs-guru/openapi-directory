import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionInformation } from "./definitioninformation";
export declare class ListLoggerDefinitionsResponse extends SpeakeasyBase {
    definitions?: DefinitionInformation[];
    nextToken?: string;
}
