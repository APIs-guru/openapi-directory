import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeIdentityPoolXAmzTargetEnum {
    AwsCognitoIdentityServiceDescribeIdentityPool = "AWSCognitoIdentityService.DescribeIdentityPool"
}
export declare class DescribeIdentityPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIdentityPoolXAmzTargetEnum;
}
export declare class DescribeIdentityPoolRequest extends SpeakeasyBase {
    headers: DescribeIdentityPoolHeaders;
    request: shared.DescribeIdentityPoolInput;
}
export declare class DescribeIdentityPoolResponse extends SpeakeasyBase {
    contentType: string;
    identityPool?: shared.IdentityPool;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
