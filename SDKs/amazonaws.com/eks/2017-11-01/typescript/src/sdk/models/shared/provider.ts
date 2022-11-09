import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Provider
/** 
 * Identifies the Key Management Service (KMS) key used to encrypt the secrets.
**/
export class Provider extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyArn" })
  keyArn?: string;
}
