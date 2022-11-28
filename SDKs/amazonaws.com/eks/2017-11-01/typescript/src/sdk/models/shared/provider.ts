import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Provider
/** 
 * Identifies the Key Management Service (KMS) key used to encrypt the secrets.
**/
export class Provider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyArn" })
  keyArn?: string;
}
