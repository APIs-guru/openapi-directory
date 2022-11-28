import { SpeakeasyBase } from "../../../internal/utils";
import { SpotPrice } from "./spotprice";
/**
 * Contains the output of DescribeSpotPriceHistory.
**/
export declare class DescribeSpotPriceHistoryResult extends SpeakeasyBase {
    nextToken?: string;
    spotPriceHistory?: SpotPrice[];
}
