import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the expected route in the route table.
**/
export declare class ExpectedRoute extends SpeakeasyBase {
    allowedTargets?: string[];
    contributingSubnets?: string[];
    ipV4Cidr?: string;
    ipV6Cidr?: string;
    prefixListId?: string;
    routeTableId?: string;
}
