import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionInformation } from "./definitioninformation";
export declare class ListSubscriptionDefinitionsResponse extends SpeakeasyBase {
    definitions?: DefinitionInformation[];
    nextToken?: string;
}
