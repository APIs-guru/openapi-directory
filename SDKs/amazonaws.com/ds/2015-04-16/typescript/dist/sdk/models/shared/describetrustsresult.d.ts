import { SpeakeasyBase } from "../../../internal/utils";
import { Trust } from "./trust";
/**
 * The result of a DescribeTrust request.
**/
export declare class DescribeTrustsResult extends SpeakeasyBase {
    nextToken?: string;
    trusts?: Trust[];
}
