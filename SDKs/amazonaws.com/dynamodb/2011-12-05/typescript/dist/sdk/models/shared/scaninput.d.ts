import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { Condition } from "./condition";
export declare class ScanInput extends SpeakeasyBase {
    attributesToGet?: string[];
    count?: boolean;
    exclusiveStartKey?: Key;
    limit?: number;
    scanFilter?: Map<string, Condition>;
    tableName: string;
}
