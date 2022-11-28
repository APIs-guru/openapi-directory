import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.
**/
export declare class AggregateResourceIdentifier extends SpeakeasyBase {
    resourceId: string;
    resourceName?: string;
    resourceType: ResourceTypeEnum;
    sourceAccountId: string;
    sourceRegion: string;
}
