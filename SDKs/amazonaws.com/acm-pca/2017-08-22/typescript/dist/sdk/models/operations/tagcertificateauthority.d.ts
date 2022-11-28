import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaTagCertificateAuthority = "ACMPrivateCA.TagCertificateAuthority"
}
export declare class TagCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagCertificateAuthorityXAmzTargetEnum;
}
export declare class TagCertificateAuthorityRequest extends SpeakeasyBase {
    headers: TagCertificateAuthorityHeaders;
    request: shared.TagCertificateAuthorityRequest;
}
export declare class TagCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidStateException?: any;
    invalidTagException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
