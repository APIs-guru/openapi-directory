import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RangeModeEnum } from "./rangemodeenum";
import { TypedAttributeValue } from "./typedattributevalue";
import { RangeModeEnum } from "./rangemodeenum";
import { TypedAttributeValue } from "./typedattributevalue";


// TypedAttributeValueRange
/** 
 * A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.
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
