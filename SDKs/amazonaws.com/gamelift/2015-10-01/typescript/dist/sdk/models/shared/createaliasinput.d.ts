import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategy } from "./routingstrategy";
import { Tag } from "./tag";
/**
 * Represents the input for a request operation.
**/
export declare class CreateAliasInput extends SpeakeasyBase {
    description?: string;
    name: string;
    routingStrategy: RoutingStrategy;
    tags?: Tag[];
}
