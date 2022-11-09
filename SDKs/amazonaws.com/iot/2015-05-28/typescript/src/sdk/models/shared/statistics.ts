import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Statistics
/** 
 * A map of key-value pairs for all supported statistics. Currently, only count is supported.
**/
export class Statistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average?: number;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=maximum" })
  maximum?: number;

  @Metadata({ data: "json, name=minimum" })
  minimum?: number;

  @Metadata({ data: "json, name=stdDeviation" })
  stdDeviation?: number;

  @Metadata({ data: "json, name=sum" })
  sum?: number;

  @Metadata({ data: "json, name=sumOfSquares" })
  sumOfSquares?: number;

  @Metadata({ data: "json, name=variance" })
  variance?: number;
}
