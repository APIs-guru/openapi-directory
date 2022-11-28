import { SpeakeasyBase } from "../../../internal/utils";
import { RangeModeEnum } from "./rangemodeenum";
import { TypedAttributeValue } from "./typedattributevalue";
/**
 * A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.
**/
export declare class TypedAttributeValueRange extends SpeakeasyBase {
    endMode: RangeModeEnum;
    endValue?: TypedAttributeValue;
    startMode: RangeModeEnum;
    startValue?: TypedAttributeValue;
}
