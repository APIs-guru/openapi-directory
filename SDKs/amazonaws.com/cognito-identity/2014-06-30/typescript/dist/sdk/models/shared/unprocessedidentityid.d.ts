import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
**/
export declare class UnprocessedIdentityId extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    identityId?: string;
}
