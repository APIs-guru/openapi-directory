import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtendedKeyUsageNameEnum } from "./extendedkeyusagenameenum";
/**
 * The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension.
**/
export declare class ExtendedKeyUsage extends SpeakeasyBase {
    name?: ExtendedKeyUsageNameEnum;
    oid?: string;
}
