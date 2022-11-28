import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeySummary
/** 
 * Contains information about a public key.
**/
export class PublicKeySummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  createdTime: Date;

  @SpeakeasyMetadata()
  encodedKey: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  name: string;
}
