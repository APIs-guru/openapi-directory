import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A member account that was included in a request but for which the request could not be processed.
**/
export declare class UnprocessedAccount extends SpeakeasyBase {
    accountId?: string;
    reason?: string;
}
