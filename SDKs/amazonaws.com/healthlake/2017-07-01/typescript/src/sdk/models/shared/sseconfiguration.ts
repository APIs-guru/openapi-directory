import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KmsEncryptionConfig } from "./kmsencryptionconfig";


// SseConfiguration
/** 
 *  The server-side encryption key configuration for a customer provided encryption key. 
**/
export class SseConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsEncryptionConfig" })
  kmsEncryptionConfig: KmsEncryptionConfig;
}
