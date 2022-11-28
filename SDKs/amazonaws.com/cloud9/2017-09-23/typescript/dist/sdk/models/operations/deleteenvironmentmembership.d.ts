import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEnvironmentMembershipXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceDeleteEnvironmentMembership = "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership"
}
export declare class DeleteEnvironmentMembershipHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEnvironmentMembershipXAmzTargetEnum;
}
export declare class DeleteEnvironmentMembershipRequest extends SpeakeasyBase {
    headers: DeleteEnvironmentMembershipHeaders;
    request: shared.DeleteEnvironmentMembershipRequest;
}
export declare class DeleteEnvironmentMembershipResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    deleteEnvironmentMembershipResult?: Map<string, any>;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
