import { SpeakeasyBase } from "../../../internal/utils";
import { AccessMethodTypeEnum } from "./accessmethodtypeenum";
/**
 * Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.
**/
export declare class AccessMethod extends SpeakeasyBase {
    accessMethodType?: AccessMethodTypeEnum;
    customObjectIdentifier?: string;
}
