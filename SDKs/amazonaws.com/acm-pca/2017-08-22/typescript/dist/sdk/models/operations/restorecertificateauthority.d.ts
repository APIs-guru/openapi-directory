import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RestoreCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaRestoreCertificateAuthority = "ACMPrivateCA.RestoreCertificateAuthority"
}
export declare class RestoreCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreCertificateAuthorityXAmzTargetEnum;
}
export declare class RestoreCertificateAuthorityRequest extends SpeakeasyBase {
    headers: RestoreCertificateAuthorityHeaders;
    request: shared.RestoreCertificateAuthorityRequest;
}
export declare class RestoreCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
