import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";
export declare class BatchGetAggregateResourceConfigRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    resourceIdentifiers: AggregateResourceIdentifier[];
}
