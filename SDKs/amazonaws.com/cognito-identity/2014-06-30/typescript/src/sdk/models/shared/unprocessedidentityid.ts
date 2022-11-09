import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


// UnprocessedIdentityId
/** 
 * An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
**/
export class UnprocessedIdentityId extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: ErrorCodeEnum;

  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;
}
