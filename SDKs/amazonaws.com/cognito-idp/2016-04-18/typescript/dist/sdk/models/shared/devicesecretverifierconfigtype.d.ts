import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The device verifier against which it will be authenticated.
**/
export declare class DeviceSecretVerifierConfigType extends SpeakeasyBase {
    passwordVerifier?: string;
    salt?: string;
}
