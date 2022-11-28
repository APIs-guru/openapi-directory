import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The criteria to use in the filter that defines the archive rule.
**/
export declare class Criterion extends SpeakeasyBase {
    contains?: string[];
    eq?: string[];
    exists?: boolean;
    neq?: string[];
}
