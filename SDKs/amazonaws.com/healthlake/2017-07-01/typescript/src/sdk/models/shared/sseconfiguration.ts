import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KmsEncryptionConfig } from "./kmsencryptionconfig";



// SseConfiguration
/** 
 *  The server-side encryption key configuration for a customer provided encryption key. 
**/
export class SseConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsEncryptionConfig" })
  kmsEncryptionConfig: KmsEncryptionConfig;
}
