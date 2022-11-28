import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";



// UnprocessedIdentityId
/** 
 * An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
**/
export class UnprocessedIdentityId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: ErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;
}
