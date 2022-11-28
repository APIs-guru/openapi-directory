import { SpeakeasyBase } from "../../../internal/utils";
import { CacheBehavior } from "./cachebehavior";
/**
 * A complex type that contains zero or more <code>CacheBehavior</code> elements.
**/
export declare class CacheBehaviors extends SpeakeasyBase {
    items?: CacheBehavior[];
    quantity: number;
}
