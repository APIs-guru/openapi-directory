import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptionConfiguration
/** 
 * Specifies the encryption settings for shared snapshots that are copied across Regions.
**/
export class EncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CmkArn" })
  cmkArn?: string;

  @Metadata({ data: "json, name=Encrypted" })
  encrypted: boolean;
}
