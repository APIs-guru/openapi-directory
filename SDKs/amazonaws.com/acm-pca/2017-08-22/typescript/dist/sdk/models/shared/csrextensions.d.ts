import { SpeakeasyBase } from "../../../internal/utils";
import { KeyUsage } from "./keyusage";
import { AccessDescription } from "./accessdescription";
/**
 * Describes the certificate extensions to be added to the certificate signing request (CSR).
**/
export declare class CsrExtensions extends SpeakeasyBase {
    keyUsage?: KeyUsage;
    subjectInformationAccess?: AccessDescription[];
}
