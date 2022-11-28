import { SpeakeasyBase } from "../../../internal/utils";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnValueEnum } from "./returnvalueenum";
export declare class PutItemInput extends SpeakeasyBase {
    expected?: Map<string, ExpectedAttributeValue>;
    item: Map<string, AttributeValue>;
    returnValues?: ReturnValueEnum;
    tableName: string;
}
