import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtendedKeyUsageNameEnum } from "./extendedkeyusagenameenum";



// ExtendedKeyUsage
/** 
 * The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension. 
**/
export class ExtendedKeyUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: ExtendedKeyUsageNameEnum;

  @SpeakeasyMetadata({ data: "json, name=OID" })
  oid?: string;
}
