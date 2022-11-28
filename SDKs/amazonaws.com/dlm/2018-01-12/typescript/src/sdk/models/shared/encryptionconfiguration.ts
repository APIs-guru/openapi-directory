import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EncryptionConfiguration
/** 
 * Specifies the encryption settings for shared snapshots that are copied across Regions.
**/
export class EncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CmkArn" })
  cmkArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted: boolean;
}
