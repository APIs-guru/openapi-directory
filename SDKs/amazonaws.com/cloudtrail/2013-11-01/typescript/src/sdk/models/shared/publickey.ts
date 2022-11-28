import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKey
/** 
 * Contains information about a returned public key.
**/
export class PublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidityEndTime" })
  validityEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ValidityStartTime" })
  validityStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
