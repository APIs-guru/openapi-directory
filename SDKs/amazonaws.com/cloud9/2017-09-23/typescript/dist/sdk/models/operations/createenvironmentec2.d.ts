import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEnvironmentEc2XAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceCreateEnvironmentEc2 = "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2"
}
export declare class CreateEnvironmentEc2Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentEc2XAmzTargetEnum;
}
export declare class CreateEnvironmentEc2Request extends SpeakeasyBase {
    headers: CreateEnvironmentEc2Headers;
    request: shared.CreateEnvironmentEc2Request;
}
export declare class CreateEnvironmentEc2Response extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createEnvironmentEc2Result?: shared.CreateEnvironmentEc2Result;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
