import { SpeakeasyBase } from "../../../internal/utils";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { Key } from "./key";
import { ReturnValueEnum } from "./returnvalueenum";
export declare class DeleteItemInput extends SpeakeasyBase {
    expected?: Map<string, ExpectedAttributeValue>;
    key: Key;
    returnValues?: ReturnValueEnum;
    tableName: string;
}
