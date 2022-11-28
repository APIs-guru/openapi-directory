import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotPrice } from "./spotprice";



// DescribeSpotPriceHistoryResult
/** 
 * Contains the output of DescribeSpotPriceHistory.
**/
export class DescribeSpotPriceHistoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: SpotPrice })
  spotPriceHistory?: SpotPrice[];
}
