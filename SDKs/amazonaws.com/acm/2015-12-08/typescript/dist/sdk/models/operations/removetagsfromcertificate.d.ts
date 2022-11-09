import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RemoveTagsFromCertificateXAmzTargetEnum {
    CertificateManagerRemoveTagsFromCertificate = "CertificateManager.RemoveTagsFromCertificate"
}
export declare class RemoveTagsFromCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsFromCertificateXAmzTargetEnum;
}
export declare class RemoveTagsFromCertificateRequest extends SpeakeasyBase {
    headers: RemoveTagsFromCertificateHeaders;
    request: shared.RemoveTagsFromCertificateRequest;
}
export declare class RemoveTagsFromCertificateResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidParameterException?: any;
    invalidTagException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagPolicyException?: any;
    throttlingException?: any;
}
