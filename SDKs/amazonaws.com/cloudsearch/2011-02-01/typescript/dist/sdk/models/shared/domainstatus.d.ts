import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceEndpoint } from "./serviceendpoint";
/**
 * The current status of the search domain.
**/
export declare class DomainStatus extends SpeakeasyBase {
    created?: boolean;
    deleted?: boolean;
    docService?: ServiceEndpoint;
    domainId: string;
    domainName: string;
    numSearchableDocs?: number;
    processing?: boolean;
    requiresIndexDocuments: boolean;
    searchInstanceCount?: number;
    searchInstanceType?: string;
    searchPartitionCount?: number;
    searchService?: ServiceEndpoint;
}
