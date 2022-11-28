import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedKeyUsageTypeEnum } from "./extendedkeyusagetypeenum";
/**
 * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.
**/
export declare class ExtendedKeyUsage extends SpeakeasyBase {
    extendedKeyUsageObjectIdentifier?: string;
    extendedKeyUsageType?: ExtendedKeyUsageTypeEnum;
}
