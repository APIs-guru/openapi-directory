import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FieldStats
/** 
 * The statistics for a field calculated in the request.
**/
export class FieldStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: string;

  @SpeakeasyMetadata({ data: "json, name=mean" })
  mean?: string;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: string;

  @SpeakeasyMetadata({ data: "json, name=missing" })
  missing?: number;

  @SpeakeasyMetadata({ data: "json, name=stddev" })
  stddev?: number;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum?: number;

  @SpeakeasyMetadata({ data: "json, name=sumOfSquares" })
  sumOfSquares?: number;
}
