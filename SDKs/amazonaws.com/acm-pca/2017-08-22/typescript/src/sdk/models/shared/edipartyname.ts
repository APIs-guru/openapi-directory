import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EdiPartyName
/** 
 * Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://tools.ietf.org/html/rfc5280">Subject Alternative Name</a> in RFC 5280.
**/
export class EdiPartyName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NameAssigner" })
  nameAssigner?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyName" })
  partyName: string;
}
