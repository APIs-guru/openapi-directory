import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEnvironmentMembershipXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceCreateEnvironmentMembership = "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership"
}
export declare class CreateEnvironmentMembershipHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentMembershipXAmzTargetEnum;
}
export declare class CreateEnvironmentMembershipRequest extends SpeakeasyBase {
    headers: CreateEnvironmentMembershipHeaders;
    request: shared.CreateEnvironmentMembershipRequest;
}
export declare class CreateEnvironmentMembershipResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createEnvironmentMembershipResult?: shared.CreateEnvironmentMembershipResult;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
