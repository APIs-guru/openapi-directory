import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceSummary } from "./servicesummary";
export declare class ListServicesResponse extends SpeakeasyBase {
    nextToken?: string;
    serviceSummaryList: ServiceSummary[];
}
