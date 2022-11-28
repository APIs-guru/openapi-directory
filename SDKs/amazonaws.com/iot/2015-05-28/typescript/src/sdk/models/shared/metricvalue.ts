import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricValue
/** 
 * The value to be compared with the <code>metric</code>.
**/
export class MetricValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=numbers" })
  numbers?: number[];

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: number[];

  @SpeakeasyMetadata({ data: "json, name=strings" })
  strings?: string[];
}
