import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaDeleteCertificateAuthority = "ACMPrivateCA.DeleteCertificateAuthority"
}
export declare class DeleteCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCertificateAuthorityXAmzTargetEnum;
}
export declare class DeleteCertificateAuthorityRequest extends SpeakeasyBase {
    headers: DeleteCertificateAuthorityHeaders;
    request: shared.DeleteCertificateAuthorityRequest;
}
export declare class DeleteCertificateAuthorityResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidArnException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
