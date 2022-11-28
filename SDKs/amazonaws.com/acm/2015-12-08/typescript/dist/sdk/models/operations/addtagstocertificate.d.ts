import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddTagsToCertificateXAmzTargetEnum {
    CertificateManagerAddTagsToCertificate = "CertificateManager.AddTagsToCertificate"
}
export declare class AddTagsToCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsToCertificateXAmzTargetEnum;
}
export declare class AddTagsToCertificateRequest extends SpeakeasyBase {
    headers: AddTagsToCertificateHeaders;
    request: shared.AddTagsToCertificateRequest;
}
export declare class AddTagsToCertificateResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidParameterException?: any;
    invalidTagException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagPolicyException?: any;
    throttlingException?: any;
    tooManyTagsException?: any;
}
