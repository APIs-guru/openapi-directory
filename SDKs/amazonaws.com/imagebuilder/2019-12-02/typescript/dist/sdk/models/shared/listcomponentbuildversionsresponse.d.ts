import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentSummary } from "./componentsummary";
export declare class ListComponentBuildVersionsResponse extends SpeakeasyBase {
    componentSummaryList?: ComponentSummary[];
    nextToken?: string;
    requestId?: string;
}
