import { SpeakeasyBase } from "../../../internal/utils";
import { OutgoingCertificate } from "./outgoingcertificate";
/**
 * The output from the ListOutgoingCertificates operation.
**/
export declare class ListOutgoingCertificatesResponse extends SpeakeasyBase {
    nextMarker?: string;
    outgoingCertificates?: OutgoingCertificate[];
}
