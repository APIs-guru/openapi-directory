import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceSecretVerifierConfigType
/** 
 * The device verifier against which it will be authenticated.
**/
export class DeviceSecretVerifierConfigType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PasswordVerifier" })
  passwordVerifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Salt" })
  salt?: string;
}
