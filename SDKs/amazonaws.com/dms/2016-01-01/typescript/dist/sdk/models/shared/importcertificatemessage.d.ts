import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ImportCertificateMessage extends SpeakeasyBase {
    certificateIdentifier: string;
    certificatePem?: string;
    certificateWallet?: string;
    tags?: Tag[];
}
