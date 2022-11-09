import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionInformation } from "./definitioninformation";
export declare class ListDeviceDefinitionsResponse extends SpeakeasyBase {
    definitions?: DefinitionInformation[];
    nextToken?: string;
}
