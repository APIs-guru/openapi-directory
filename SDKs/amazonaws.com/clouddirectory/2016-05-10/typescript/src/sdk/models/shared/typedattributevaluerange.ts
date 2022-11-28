import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RangeModeEnum } from "./rangemodeenum";
import { TypedAttributeValue } from "./typedattributevalue";



// TypedAttributeValueRange
/** 
 * A range of attribute values. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#rangefilters">Range Filters</a>.
**/
export class TypedAttributeValueRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndMode" })
  endMode: RangeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=EndValue" })
  endValue?: TypedAttributeValue;

  @SpeakeasyMetadata({ data: "json, name=StartMode" })
  startMode: RangeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartValue" })
  startValue?: TypedAttributeValue;
}
