import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaUpdateCertificateAuthority = "ACMPrivateCA.UpdateCertificateAuthority"
}
export declare class UpdateCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCertificateAuthorityXAmzTargetEnum;
}
export declare class UpdateCertificateAuthorityRequest extends SpeakeasyBase {
    headers: UpdateCertificateAuthorityHeaders;
    request: shared.UpdateCertificateAuthorityRequest;
}
export declare class UpdateCertificateAuthorityResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidArgsException?: any;
    invalidArnException?: any;
    invalidPolicyException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
