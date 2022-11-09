import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { Filters } from "./filters";
export declare class ListCertificatesRequest extends SpeakeasyBase {
    certificateStatuses?: CertificateStatusEnum[];
    includes?: Filters;
    maxItems?: number;
    nextToken?: string;
}
