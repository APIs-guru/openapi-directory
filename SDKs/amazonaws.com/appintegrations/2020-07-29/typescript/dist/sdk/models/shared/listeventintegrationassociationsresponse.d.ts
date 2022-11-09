import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventIntegrationAssociation } from "./eventintegrationassociation";
export declare class ListEventIntegrationAssociationsResponse extends SpeakeasyBase {
    eventIntegrationAssociations?: EventIntegrationAssociation[];
    nextToken?: string;
}
