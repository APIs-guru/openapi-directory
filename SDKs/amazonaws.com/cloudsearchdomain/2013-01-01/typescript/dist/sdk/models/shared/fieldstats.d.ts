import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The statistics for a field calculated in the request.
**/
export declare class FieldStats extends SpeakeasyBase {
    count?: number;
    max?: string;
    mean?: string;
    min?: string;
    missing?: number;
    stddev?: number;
    sum?: number;
    sumOfSquares?: number;
}
