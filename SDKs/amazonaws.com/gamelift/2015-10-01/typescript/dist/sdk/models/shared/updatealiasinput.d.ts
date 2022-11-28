import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategy } from "./routingstrategy";
/**
 * Represents the input for a request operation.
**/
export declare class UpdateAliasInput extends SpeakeasyBase {
    aliasId: string;
    description?: string;
    name?: string;
    routingStrategy?: RoutingStrategy;
}
