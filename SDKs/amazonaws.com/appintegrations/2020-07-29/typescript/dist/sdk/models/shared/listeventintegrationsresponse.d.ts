import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventIntegration } from "./eventintegration";
export declare class ListEventIntegrationsResponse extends SpeakeasyBase {
    eventIntegrations?: EventIntegration[];
    nextToken?: string;
}
