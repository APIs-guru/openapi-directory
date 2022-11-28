import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
**/
export declare class Asn1Subject extends SpeakeasyBase {
    commonName?: string;
    country?: string;
    distinguishedNameQualifier?: string;
    generationQualifier?: string;
    givenName?: string;
    initials?: string;
    locality?: string;
    organization?: string;
    organizationalUnit?: string;
    pseudonym?: string;
    serialNumber?: string;
    state?: string;
    surname?: string;
    title?: string;
}
