import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetAccountConfigurationXAmzTargetEnum {
    CertificateManagerGetAccountConfiguration = "CertificateManager.GetAccountConfiguration"
}
export declare class GetAccountConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccountConfigurationXAmzTargetEnum;
}
export declare class GetAccountConfigurationRequest extends SpeakeasyBase {
    headers: GetAccountConfigurationHeaders;
}
export declare class GetAccountConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAccountConfigurationResponse?: shared.GetAccountConfigurationResponse;
    statusCode: number;
    throttlingException?: any;
}
