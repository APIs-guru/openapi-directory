import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Asn1Subject } from "./asn1subject";
import { EdiPartyName } from "./edipartyname";
import { OtherName } from "./othername";


// GeneralName
/** 
 * Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.
**/
export class GeneralName extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryName" })
  directoryName?: Asn1Subject;

  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=EdiPartyName" })
  ediPartyName?: EdiPartyName;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=OtherName" })
  otherName?: OtherName;

  @Metadata({ data: "json, name=RegisteredId" })
  registeredId?: string;

  @Metadata({ data: "json, name=Rfc822Name" })
  rfc822Name?: string;

  @Metadata({ data: "json, name=UniformResourceIdentifier" })
  uniformResourceIdentifier?: string;
}
