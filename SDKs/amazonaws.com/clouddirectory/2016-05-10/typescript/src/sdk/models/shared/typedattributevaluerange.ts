import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RangeModeEnum } from "./rangemodeenum";
import { TypedAttributeValue } from "./typedattributevalue";
import { RangeModeEnum } from "./rangemodeenum";
import { TypedAttributeValue } from "./typedattributevalue";


// TypedAttributeValueRange
/** 
 * A range of attribute values. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#rangefilters">Range Filters</a>.
**/
export class TypedAttributeValueRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndMode" })
  endMode: RangeModeEnum;

  @Metadata({ data: "json, name=EndValue" })
  endValue?: TypedAttributeValue;

  @Metadata({ data: "json, name=StartMode" })
  startMode: RangeModeEnum;

  @Metadata({ data: "json, name=StartValue" })
  startValue?: TypedAttributeValue;
}
