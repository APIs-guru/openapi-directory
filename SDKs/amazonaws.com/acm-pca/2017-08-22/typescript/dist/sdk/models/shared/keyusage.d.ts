import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
**/
export declare class KeyUsage extends SpeakeasyBase {
    crlSign?: boolean;
    dataEncipherment?: boolean;
    decipherOnly?: boolean;
    digitalSignature?: boolean;
    encipherOnly?: boolean;
    keyAgreement?: boolean;
    keyCertSign?: boolean;
    keyEncipherment?: boolean;
    nonRepudiation?: boolean;
}
