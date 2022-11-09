import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Input to the GetId action.
**/
export declare class GetIdInput extends SpeakeasyBase {
    accountId?: string;
    identityPoolId: string;
    logins?: Map<string, string>;
}
