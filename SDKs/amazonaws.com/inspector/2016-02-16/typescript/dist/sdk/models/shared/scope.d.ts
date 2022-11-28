import { SpeakeasyBase } from "../../../internal/utils";
import { ScopeTypeEnum } from "./scopetypeenum";
/**
 * This data type contains key-value pairs that identify various Amazon resources.
**/
export declare class Scope extends SpeakeasyBase {
    key?: ScopeTypeEnum;
    value?: string;
}
