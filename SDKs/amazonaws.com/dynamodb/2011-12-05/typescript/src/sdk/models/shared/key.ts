import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// Key
/** 
 * The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
**/
export class Key extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HashKeyElement" })
  hashKeyElement: AttributeValue;

  @SpeakeasyMetadata({ data: "json, name=RangeKeyElement" })
  rangeKeyElement?: AttributeValue;
}
