import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ImportCertificateXAmzTargetEnum {
    AmazonDmSv20160101ImportCertificate = "AmazonDMSv20160101.ImportCertificate"
}
export declare class ImportCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportCertificateXAmzTargetEnum;
}
export declare class ImportCertificateRequest extends SpeakeasyBase {
    headers: ImportCertificateHeaders;
    request: shared.ImportCertificateMessage;
}
export declare class ImportCertificateResponse extends SpeakeasyBase {
    contentType: string;
    importCertificateResponse?: shared.ImportCertificateResponse;
    invalidCertificateFault?: any;
    resourceAlreadyExistsFault?: any;
    resourceQuotaExceededFault?: any;
    statusCode: number;
}
