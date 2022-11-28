import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * The output of the ListCertificates operation.
**/
export declare class ListCertificatesResponse extends SpeakeasyBase {
    certificates?: Certificate[];
    nextMarker?: string;
}
