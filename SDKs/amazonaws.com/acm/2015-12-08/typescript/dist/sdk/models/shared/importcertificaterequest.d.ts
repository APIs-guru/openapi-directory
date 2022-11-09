import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class ImportCertificateRequest extends SpeakeasyBase {
    certificate: string;
    certificateArn?: string;
    certificateChain?: string;
    privateKey: string;
    tags?: Tag[];
}
