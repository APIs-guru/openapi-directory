import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FieldStats
/** 
 * The statistics for a field calculated in the request.
**/
export class FieldStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=max" })
  max?: string;

  @Metadata({ data: "json, name=mean" })
  mean?: string;

  @Metadata({ data: "json, name=min" })
  min?: string;

  @Metadata({ data: "json, name=missing" })
  missing?: number;

  @Metadata({ data: "json, name=stddev" })
  stddev?: number;

  @Metadata({ data: "json, name=sum" })
  sum?: number;

  @Metadata({ data: "json, name=sumOfSquares" })
  sumOfSquares?: number;
}
