import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PartnerEventSource } from "./partnereventsource";
export declare class ListPartnerEventSourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    partnerEventSources?: PartnerEventSource[];
}
