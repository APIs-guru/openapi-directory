import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TypedAttributeValue
/** 
 * Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
**/
export class TypedAttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=BinaryValue" })
  binaryValue?: string;

  @Metadata({ data: "json, name=BooleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=DatetimeValue" })
  datetimeValue?: Date;

  @Metadata({ data: "json, name=NumberValue" })
  numberValue?: string;

  @Metadata({ data: "json, name=StringValue" })
  stringValue?: string;
}
