import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationSummary } from "./applicationsummary";
export declare class ListApplicationsResponse extends SpeakeasyBase {
    applicationSummaries?: ApplicationSummary[];
    nextToken?: string;
}
