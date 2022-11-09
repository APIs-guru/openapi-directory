import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SuiteRunInformation } from "./suiteruninformation";
export declare class ListSuiteRunsResponse extends SpeakeasyBase {
    nextToken?: string;
    suiteRunsList?: SuiteRunInformation[];
}
