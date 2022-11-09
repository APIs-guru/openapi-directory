import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationTypeNameEnum } from "./aggregationtypenameenum";


// AggregationType
/** 
 * The type of aggregation queries.
**/
export class AggregationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: AggregationTypeNameEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
