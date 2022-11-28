import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Statistics
/** 
 * A map of key-value pairs for all supported statistics. Currently, only count is supported.
**/
export class Statistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=maximum" })
  maximum?: number;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: number;

  @SpeakeasyMetadata({ data: "json, name=stdDeviation" })
  stdDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum?: number;

  @SpeakeasyMetadata({ data: "json, name=sumOfSquares" })
  sumOfSquares?: number;

  @SpeakeasyMetadata({ data: "json, name=variance" })
  variance?: number;
}
