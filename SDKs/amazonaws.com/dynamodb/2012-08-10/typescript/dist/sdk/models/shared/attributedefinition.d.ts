import { SpeakeasyBase } from "../../../internal/utils";
import { ScalarAttributeTypeEnum } from "./scalarattributetypeenum";
/**
 * Represents an attribute for describing the key schema for the table and indexes.
**/
export declare class AttributeDefinition extends SpeakeasyBase {
    attributeName: string;
    attributeType: ScalarAttributeTypeEnum;
}
