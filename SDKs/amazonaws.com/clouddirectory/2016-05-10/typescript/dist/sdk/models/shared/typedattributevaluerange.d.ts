import { SpeakeasyBase } from "../../../internal/utils";
import { RangeModeEnum } from "./rangemodeenum";
import { TypedAttributeValue } from "./typedattributevalue";
/**
 * A range of attribute values. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#rangefilters">Range Filters</a>.
**/
export declare class TypedAttributeValueRange extends SpeakeasyBase {
    endMode: RangeModeEnum;
    endValue?: TypedAttributeValue;
    startMode: RangeModeEnum;
    startValue?: TypedAttributeValue;
}
