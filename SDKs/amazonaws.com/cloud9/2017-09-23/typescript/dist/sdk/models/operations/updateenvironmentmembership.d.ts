import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateEnvironmentMembershipXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceUpdateEnvironmentMembership = "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership"
}
export declare class UpdateEnvironmentMembershipHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentMembershipXAmzTargetEnum;
}
export declare class UpdateEnvironmentMembershipRequest extends SpeakeasyBase {
    headers: UpdateEnvironmentMembershipHeaders;
    request: shared.UpdateEnvironmentMembershipRequest;
}
export declare class UpdateEnvironmentMembershipResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateEnvironmentMembershipResult?: shared.UpdateEnvironmentMembershipResult;
}
