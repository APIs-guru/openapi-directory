import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummary } from "./functionsummary";
/**
 * A list of CloudFront functions.
**/
export declare class FunctionList extends SpeakeasyBase {
    items?: FunctionSummary[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
