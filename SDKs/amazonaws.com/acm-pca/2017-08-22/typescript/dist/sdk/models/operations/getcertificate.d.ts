import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCertificateXAmzTargetEnum {
    AcmPrivateCaGetCertificate = "ACMPrivateCA.GetCertificate"
}
export declare class GetCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCertificateXAmzTargetEnum;
}
export declare class GetCertificateRequest extends SpeakeasyBase {
    headers: GetCertificateHeaders;
    request: shared.GetCertificateRequest;
}
export declare class GetCertificateResponse extends SpeakeasyBase {
    contentType: string;
    getCertificateResponse?: shared.GetCertificateResponse;
    invalidArnException?: any;
    invalidStateException?: any;
    requestFailedException?: any;
    requestInProgressException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
