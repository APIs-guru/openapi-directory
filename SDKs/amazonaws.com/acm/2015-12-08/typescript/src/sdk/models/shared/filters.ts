import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtendedKeyUsageNameEnum } from "./extendedkeyusagenameenum";
import { KeyAlgorithmEnum } from "./keyalgorithmenum";
import { KeyUsageNameEnum } from "./keyusagenameenum";


// Filters
/** 
 * This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. 
**/
export class Filters extends SpeakeasyBase {
  @Metadata({ data: "json, name=extendedKeyUsage" })
  extendedKeyUsage?: ExtendedKeyUsageNameEnum[];

  @Metadata({ data: "json, name=keyTypes" })
  keyTypes?: KeyAlgorithmEnum[];

  @Metadata({ data: "json, name=keyUsage" })
  keyUsage?: KeyUsageNameEnum[];
}
