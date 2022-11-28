import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationTypeNameEnum } from "./aggregationtypenameenum";



// AggregationType
/** 
 * The type of aggregation queries.
**/
export class AggregationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: AggregationTypeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
