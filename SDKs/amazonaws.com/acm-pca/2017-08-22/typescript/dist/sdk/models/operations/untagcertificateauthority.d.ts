import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaUntagCertificateAuthority = "ACMPrivateCA.UntagCertificateAuthority"
}
export declare class UntagCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagCertificateAuthorityXAmzTargetEnum;
}
export declare class UntagCertificateAuthorityRequest extends SpeakeasyBase {
    headers: UntagCertificateAuthorityHeaders;
    request: shared.UntagCertificateAuthorityRequest;
}
export declare class UntagCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidStateException?: any;
    invalidTagException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
