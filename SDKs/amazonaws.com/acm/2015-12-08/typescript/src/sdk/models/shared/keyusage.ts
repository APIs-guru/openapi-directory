import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyUsageNameEnum } from "./keyusagenameenum";


// KeyUsage
/** 
 * The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.
**/
export class KeyUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: KeyUsageNameEnum;
}
