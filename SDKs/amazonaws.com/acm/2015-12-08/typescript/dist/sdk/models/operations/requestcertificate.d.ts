import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RequestCertificateXAmzTargetEnum {
    CertificateManagerRequestCertificate = "CertificateManager.RequestCertificate"
}
export declare class RequestCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RequestCertificateXAmzTargetEnum;
}
export declare class RequestCertificateRequest extends SpeakeasyBase {
    headers: RequestCertificateHeaders;
    request: shared.RequestCertificateRequest;
}
export declare class RequestCertificateResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidDomainValidationOptionsException?: any;
    invalidParameterException?: any;
    invalidTagException?: any;
    limitExceededException?: any;
    requestCertificateResponse?: shared.RequestCertificateResponse;
    statusCode: number;
    tagPolicyException?: any;
    tooManyTagsException?: any;
}
