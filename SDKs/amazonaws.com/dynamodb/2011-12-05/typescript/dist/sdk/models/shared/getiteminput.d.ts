import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
export declare class GetItemInput extends SpeakeasyBase {
    attributesToGet?: string[];
    consistentRead?: boolean;
    key: Key;
    tableName: string;
}
