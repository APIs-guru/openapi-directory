import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceValue } from "./resourcevalue";
import { StaticValue } from "./staticvalue";
/**
 * The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.
**/
export declare class RemediationParameterValue extends SpeakeasyBase {
    resourceValue?: ResourceValue;
    staticValue?: StaticValue;
}
