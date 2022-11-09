import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ImportCertificateXAmzTargetEnum {
    CertificateManagerImportCertificate = "CertificateManager.ImportCertificate"
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
    request: shared.ImportCertificateRequest;
}
export declare class ImportCertificateResponse extends SpeakeasyBase {
    contentType: string;
    importCertificateResponse?: shared.ImportCertificateResponse;
    invalidArnException?: any;
    invalidParameterException?: any;
    invalidTagException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagPolicyException?: any;
    tooManyTagsException?: any;
}
