import { SpeakeasyBase } from "../../../internal/utils";
import { ServerCertificateMetadata } from "./servercertificatemetadata";
import { Tag } from "./tag";
/**
 * <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
**/
export declare class ServerCertificate extends SpeakeasyBase {
    certificateBody: string;
    certificateChain?: string;
    serverCertificateMetadata: ServerCertificateMetadata;
    tags?: Tag[];
}
