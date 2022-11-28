import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceDescribeIdentity = "AWSCognitoIdentityService.DescribeIdentity"
}
export declare class DescribeIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIdentityXAmzTargetEnum;
}
export declare class DescribeIdentityRequest extends SpeakeasyBase {
    headers: DescribeIdentityHeaders;
    request: shared.DescribeIdentityInput;
}
export declare class DescribeIdentityResponse extends SpeakeasyBase {
    contentType: string;
    identityDescription?: shared.IdentityDescription;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
