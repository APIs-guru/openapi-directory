import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ResendValidationEmailXAmzTargetEnum {
    CertificateManagerResendValidationEmail = "CertificateManager.ResendValidationEmail"
}
export declare class ResendValidationEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResendValidationEmailXAmzTargetEnum;
}
export declare class ResendValidationEmailRequest extends SpeakeasyBase {
    headers: ResendValidationEmailHeaders;
    request: shared.ResendValidationEmailRequest;
}
export declare class ResendValidationEmailResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidDomainValidationOptionsException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
