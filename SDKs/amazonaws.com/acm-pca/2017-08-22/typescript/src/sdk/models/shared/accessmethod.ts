import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessMethodTypeEnum } from "./accessmethodtypeenum";



// AccessMethod
/** 
 * Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.
**/
export class AccessMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessMethodType" })
  accessMethodType?: AccessMethodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CustomObjectIdentifier" })
  customObjectIdentifier?: string;
}
