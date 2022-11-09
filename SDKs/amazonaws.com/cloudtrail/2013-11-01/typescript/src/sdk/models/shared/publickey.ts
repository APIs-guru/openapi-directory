import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicKey
/** 
 * Contains information about a returned public key.
**/
export class PublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=Fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=ValidityEndTime" })
  validityEndTime?: Date;

  @Metadata({ data: "json, name=ValidityStartTime" })
  validityStartTime?: Date;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
