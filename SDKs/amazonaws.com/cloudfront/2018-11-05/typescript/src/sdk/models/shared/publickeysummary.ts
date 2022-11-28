import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeySummary
/** 
 * A complex data type for public key information. 
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
