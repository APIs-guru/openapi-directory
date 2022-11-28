import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RangeModeEnum } from "./rangemodeenum";
import { TypedAttributeValue } from "./typedattributevalue";



// TypedAttributeValueRange
/** 
 * A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.
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
