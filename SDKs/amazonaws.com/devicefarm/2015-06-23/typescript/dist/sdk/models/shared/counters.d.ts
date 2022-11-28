import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents entity counters.
**/
export declare class Counters extends SpeakeasyBase {
    errored?: number;
    failed?: number;
    passed?: number;
    skipped?: number;
    stopped?: number;
    total?: number;
    warned?: number;
}
