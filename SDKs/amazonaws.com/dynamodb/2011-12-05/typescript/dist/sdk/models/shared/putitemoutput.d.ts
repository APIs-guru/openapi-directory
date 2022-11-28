import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
export declare class PutItemOutput extends SpeakeasyBase {
    attributes?: Map<string, AttributeValue>;
    consumedCapacityUnits?: number;
}
