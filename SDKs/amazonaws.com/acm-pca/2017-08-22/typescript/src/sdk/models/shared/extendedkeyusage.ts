import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtendedKeyUsageTypeEnum } from "./extendedkeyusagetypeenum";



// ExtendedKeyUsage
/** 
 * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.
**/
export class ExtendedKeyUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExtendedKeyUsageObjectIdentifier" })
  extendedKeyUsageObjectIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ExtendedKeyUsageType" })
  extendedKeyUsageType?: ExtendedKeyUsageTypeEnum;
}
