import { SpeakeasyBase } from "../../../internal/utils";
import { Asn1Subject } from "./asn1subject";
import { EdiPartyName } from "./edipartyname";
import { OtherName } from "./othername";
/**
 * Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.
**/
export declare class GeneralName extends SpeakeasyBase {
    directoryName?: Asn1Subject;
    dnsName?: string;
    ediPartyName?: EdiPartyName;
    ipAddress?: string;
    otherName?: OtherName;
    registeredId?: string;
    rfc822Name?: string;
    uniformResourceIdentifier?: string;
}
