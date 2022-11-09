import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceSecretVerifierConfigType
/** 
 * The device verifier against which it will be authenticated.
**/
export class DeviceSecretVerifierConfigType extends SpeakeasyBase {
  @Metadata({ data: "json, name=PasswordVerifier" })
  passwordVerifier?: string;

  @Metadata({ data: "json, name=Salt" })
  salt?: string;
}
