import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";


// Key
/** 
 * The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
**/
export class Key extends SpeakeasyBase {
  @Metadata({ data: "json, name=HashKeyElement" })
  hashKeyElement: AttributeValue;

  @Metadata({ data: "json, name=RangeKeyElement" })
  rangeKeyElement?: AttributeValue;
}
