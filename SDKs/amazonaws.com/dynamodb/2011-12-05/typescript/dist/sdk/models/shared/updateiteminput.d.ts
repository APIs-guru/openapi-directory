import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValueUpdate } from "./attributevalueupdate";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { Key } from "./key";
import { ReturnValueEnum } from "./returnvalueenum";
export declare class UpdateItemInput extends SpeakeasyBase {
    attributeUpdates: Map<string, AttributeValueUpdate>;
    expected?: Map<string, ExpectedAttributeValue>;
    key: Key;
    returnValues?: ReturnValueEnum;
    tableName: string;
}
