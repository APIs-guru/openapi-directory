import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceEndpoint } from "./serviceendpoint";
import { Limits } from "./limits";
/**
 * The current status of the search domain.
**/
export declare class DomainStatus extends SpeakeasyBase {
    arn?: string;
    created?: boolean;
    deleted?: boolean;
    docService?: ServiceEndpoint;
    domainId: string;
    domainName: string;
    limits?: Limits;
    processing?: boolean;
    requiresIndexDocuments: boolean;
    searchInstanceCount?: number;
    searchInstanceType?: string;
    searchPartitionCount?: number;
    searchService?: ServiceEndpoint;
}
