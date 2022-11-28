import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationTypeNameEnum } from "./aggregationtypenameenum";
/**
 * The type of aggregation queries.
**/
export declare class AggregationType extends SpeakeasyBase {
    name: AggregationTypeNameEnum;
    values?: string[];
}
