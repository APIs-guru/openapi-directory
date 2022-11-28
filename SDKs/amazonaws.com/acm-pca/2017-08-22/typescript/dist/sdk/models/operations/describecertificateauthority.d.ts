import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaDescribeCertificateAuthority = "ACMPrivateCA.DescribeCertificateAuthority"
}
export declare class DescribeCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCertificateAuthorityXAmzTargetEnum;
}
export declare class DescribeCertificateAuthorityRequest extends SpeakeasyBase {
    headers: DescribeCertificateAuthorityHeaders;
    request: shared.DescribeCertificateAuthorityRequest;
}
export declare class DescribeCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    describeCertificateAuthorityResponse?: shared.DescribeCertificateAuthorityResponse;
    invalidArnException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
