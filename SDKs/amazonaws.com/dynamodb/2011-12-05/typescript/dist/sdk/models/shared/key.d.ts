import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
**/
export declare class Key extends SpeakeasyBase {
    hashKeyElement: AttributeValue;
    rangeKeyElement?: AttributeValue;
}
