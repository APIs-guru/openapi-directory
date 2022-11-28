import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionInformation } from "./definitioninformation";
export declare class ListResourceDefinitionsResponse extends SpeakeasyBase {
    definitions?: DefinitionInformation[];
    nextToken?: string;
}
