import { SpeakeasyBase } from "../../../internal/utils";
import { ScalarAttributeTypeEnum } from "./scalarattributetypeenum";
/**
 * <code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table.
**/
export declare class KeySchemaElement extends SpeakeasyBase {
    attributeName: string;
    attributeType: ScalarAttributeTypeEnum;
}
