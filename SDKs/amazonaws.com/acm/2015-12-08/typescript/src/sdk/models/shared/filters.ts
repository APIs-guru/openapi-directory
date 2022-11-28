import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtendedKeyUsageNameEnum } from "./extendedkeyusagenameenum";
import { KeyAlgorithmEnum } from "./keyalgorithmenum";
import { KeyUsageNameEnum } from "./keyusagenameenum";



// Filters
/** 
 * This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. 
**/
export class Filters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extendedKeyUsage" })
  extendedKeyUsage?: ExtendedKeyUsageNameEnum[];

  @SpeakeasyMetadata({ data: "json, name=keyTypes" })
  keyTypes?: KeyAlgorithmEnum[];

  @SpeakeasyMetadata({ data: "json, name=keyUsage" })
  keyUsage?: KeyUsageNameEnum[];
}
