import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IssueCertificateXAmzTargetEnum {
    AcmPrivateCaIssueCertificate = "ACMPrivateCA.IssueCertificate"
}
export declare class IssueCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IssueCertificateXAmzTargetEnum;
}
export declare class IssueCertificateRequest extends SpeakeasyBase {
    headers: IssueCertificateHeaders;
    request: shared.IssueCertificateRequest;
}
export declare class IssueCertificateResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgsException?: any;
    invalidArnException?: any;
    invalidStateException?: any;
    issueCertificateResponse?: shared.IssueCertificateResponse;
    limitExceededException?: any;
    malformedCsrException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
