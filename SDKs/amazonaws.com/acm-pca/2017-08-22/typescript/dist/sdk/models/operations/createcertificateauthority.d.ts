import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaCreateCertificateAuthority = "ACMPrivateCA.CreateCertificateAuthority"
}
export declare class CreateCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCertificateAuthorityXAmzTargetEnum;
}
export declare class CreateCertificateAuthorityRequest extends SpeakeasyBase {
    headers: CreateCertificateAuthorityHeaders;
    request: shared.CreateCertificateAuthorityRequest;
}
export declare class CreateCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    createCertificateAuthorityResponse?: shared.CreateCertificateAuthorityResponse;
    invalidArgsException?: any;
    invalidPolicyException?: any;
    invalidTagException?: any;
    limitExceededException?: any;
    statusCode: number;
}
