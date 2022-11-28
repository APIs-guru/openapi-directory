import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * The output of the ListCertificatesByCA operation.
**/
export declare class ListCertificatesByCaResponse extends SpeakeasyBase {
    certificates?: Certificate[];
    nextMarker?: string;
}
