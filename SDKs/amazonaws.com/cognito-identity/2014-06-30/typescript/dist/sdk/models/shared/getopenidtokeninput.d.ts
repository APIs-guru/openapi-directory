import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input to the GetOpenIdToken action.
**/
export declare class GetOpenIdTokenInput extends SpeakeasyBase {
    identityId: string;
    logins?: Map<string, string>;
}
