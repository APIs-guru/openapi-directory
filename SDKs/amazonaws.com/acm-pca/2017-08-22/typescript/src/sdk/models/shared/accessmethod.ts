import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessMethodTypeEnum } from "./accessmethodtypeenum";


// AccessMethod
/** 
 * Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.
**/
export class AccessMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessMethodType" })
  accessMethodType?: AccessMethodTypeEnum;

  @Metadata({ data: "json, name=CustomObjectIdentifier" })
  customObjectIdentifier?: string;
}
