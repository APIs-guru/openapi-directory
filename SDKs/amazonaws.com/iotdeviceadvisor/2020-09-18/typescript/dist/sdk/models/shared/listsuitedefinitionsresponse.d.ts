import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SuiteDefinitionInformation } from "./suitedefinitioninformation";
export declare class ListSuiteDefinitionsResponse extends SpeakeasyBase {
    nextToken?: string;
    suiteDefinitionInformationList?: SuiteDefinitionInformation[];
}
