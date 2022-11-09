import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EdiPartyName
/** 
 * Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://tools.ietf.org/html/rfc5280">Subject Alternative Name</a> in RFC 5280.
**/
export class EdiPartyName extends SpeakeasyBase {
  @Metadata({ data: "json, name=NameAssigner" })
  nameAssigner?: string;

  @Metadata({ data: "json, name=PartyName" })
  partyName: string;
}
