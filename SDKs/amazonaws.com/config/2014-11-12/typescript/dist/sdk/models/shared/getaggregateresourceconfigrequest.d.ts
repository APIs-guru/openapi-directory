import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";
export declare class GetAggregateResourceConfigRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    resourceIdentifier: AggregateResourceIdentifier;
}
