import { SpeakeasyBase } from "../../../internal/utils";
import { CaCertificate } from "./cacertificate";
/**
 * The output from the ListCACertificates operation.
**/
export declare class ListCaCertificatesResponse extends SpeakeasyBase {
    certificates?: CaCertificate[];
    nextMarker?: string;
}
