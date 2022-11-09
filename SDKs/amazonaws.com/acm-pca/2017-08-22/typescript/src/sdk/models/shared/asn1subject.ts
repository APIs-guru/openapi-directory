import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Asn1Subject
/** 
 * Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
**/
export class Asn1Subject extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommonName" })
  commonName?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=DistinguishedNameQualifier" })
  distinguishedNameQualifier?: string;

  @Metadata({ data: "json, name=GenerationQualifier" })
  generationQualifier?: string;

  @Metadata({ data: "json, name=GivenName" })
  givenName?: string;

  @Metadata({ data: "json, name=Initials" })
  initials?: string;

  @Metadata({ data: "json, name=Locality" })
  locality?: string;

  @Metadata({ data: "json, name=Organization" })
  organization?: string;

  @Metadata({ data: "json, name=OrganizationalUnit" })
  organizationalUnit?: string;

  @Metadata({ data: "json, name=Pseudonym" })
  pseudonym?: string;

  @Metadata({ data: "json, name=SerialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;

  @Metadata({ data: "json, name=Surname" })
  surname?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
