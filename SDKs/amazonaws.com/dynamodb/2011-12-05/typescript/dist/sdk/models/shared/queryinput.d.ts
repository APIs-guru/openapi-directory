import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { AttributeValue } from "./attributevalue";
import { Condition } from "./condition";
export declare class QueryInput extends SpeakeasyBase {
    attributesToGet?: string[];
    consistentRead?: boolean;
    count?: boolean;
    exclusiveStartKey?: Key;
    hashKeyValue: AttributeValue;
    limit?: number;
    rangeKeyCondition?: Condition;
    scanIndexForward?: boolean;
    tableName: string;
}
