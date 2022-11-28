import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationTypeEnum } from "./aggregationtypeenum";



// AggregationConfig
/** 
 *  The aggregation settings that you can use to customize the output format of your flow data. 
**/
export class AggregationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationType" })
  aggregationType?: AggregationTypeEnum;
}
