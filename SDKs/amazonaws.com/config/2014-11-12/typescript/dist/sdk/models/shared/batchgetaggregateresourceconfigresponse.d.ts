import { SpeakeasyBase } from "../../../internal/utils";
import { BaseConfigurationItem } from "./baseconfigurationitem";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";
export declare class BatchGetAggregateResourceConfigResponse extends SpeakeasyBase {
    baseConfigurationItems?: BaseConfigurationItem[];
    unprocessedResourceIdentifiers?: AggregateResourceIdentifier[];
}
