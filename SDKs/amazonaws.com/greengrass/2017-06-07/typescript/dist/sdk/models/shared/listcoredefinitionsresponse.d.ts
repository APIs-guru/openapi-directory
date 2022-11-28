import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionInformation } from "./definitioninformation";
export declare class ListCoreDefinitionsResponse extends SpeakeasyBase {
    definitions?: DefinitionInformation[];
    nextToken?: string;
}
