import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeUserImportJobXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeUserImportJob = "AWSCognitoIdentityProviderService.DescribeUserImportJob"
}
export declare class DescribeUserImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserImportJobXAmzTargetEnum;
}
export declare class DescribeUserImportJobRequest extends SpeakeasyBase {
    headers: DescribeUserImportJobHeaders;
    request: shared.DescribeUserImportJobRequest;
}
export declare class DescribeUserImportJobResponse extends SpeakeasyBase {
    contentType: string;
    describeUserImportJobResponse?: shared.DescribeUserImportJobResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
