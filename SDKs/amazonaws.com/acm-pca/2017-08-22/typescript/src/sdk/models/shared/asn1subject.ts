import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Asn1Subject
/** 
 * Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
**/
export class Asn1Subject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommonName" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=DistinguishedNameQualifier" })
  distinguishedNameQualifier?: string;

  @SpeakeasyMetadata({ data: "json, name=GenerationQualifier" })
  generationQualifier?: string;

  @SpeakeasyMetadata({ data: "json, name=GivenName" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=Initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=Locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=Organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnit" })
  organizationalUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=Pseudonym" })
  pseudonym?: string;

  @SpeakeasyMetadata({ data: "json, name=SerialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=Surname" })
  surname?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
