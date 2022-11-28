import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSigningCertificateXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetSigningCertificate = "AWSCognitoIdentityProviderService.GetSigningCertificate"
}
export declare class GetSigningCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSigningCertificateXAmzTargetEnum;
}
export declare class GetSigningCertificateRequest extends SpeakeasyBase {
    headers: GetSigningCertificateHeaders;
    request: shared.GetSigningCertificateRequest;
}
export declare class GetSigningCertificateResponse extends SpeakeasyBase {
    contentType: string;
    getSigningCertificateResponse?: shared.GetSigningCertificateResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
