import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TypedAttributeValue
/** 
 * Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
**/
export class TypedAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BinaryValue" })
  binaryValue?: string;

  @SpeakeasyMetadata({ data: "json, name=BooleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DatetimeValue" })
  datetimeValue?: Date;

  @SpeakeasyMetadata({ data: "json, name=NumberValue" })
  numberValue?: string;

  @SpeakeasyMetadata({ data: "json, name=StringValue" })
  stringValue?: string;
}
