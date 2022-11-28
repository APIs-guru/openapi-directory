import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAccountConfigurationXAmzTargetEnum {
    CertificateManagerPutAccountConfiguration = "CertificateManager.PutAccountConfiguration"
}
export declare class PutAccountConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAccountConfigurationXAmzTargetEnum;
}
export declare class PutAccountConfigurationRequest extends SpeakeasyBase {
    headers: PutAccountConfigurationHeaders;
    request: shared.PutAccountConfigurationRequest;
}
export declare class PutAccountConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
