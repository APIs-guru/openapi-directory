import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtendedKeyUsageNameEnum } from "./extendedkeyusagenameenum";
import { KeyAlgorithmEnum } from "./keyalgorithmenum";
import { KeyUsageNameEnum } from "./keyusagenameenum";
/**
 * This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list.
**/
export declare class Filters extends SpeakeasyBase {
    extendedKeyUsage?: ExtendedKeyUsageNameEnum[];
    keyTypes?: KeyAlgorithmEnum[];
    keyUsage?: KeyUsageNameEnum[];
}
