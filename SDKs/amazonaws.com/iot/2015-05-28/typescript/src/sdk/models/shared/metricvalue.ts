import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricValue
/** 
 * The value to be compared with the <code>metric</code>.
**/
export class MetricValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=numbers" })
  numbers?: number[];

  @Metadata({ data: "json, name=ports" })
  ports?: number[];

  @Metadata({ data: "json, name=strings" })
  strings?: string[];
}
