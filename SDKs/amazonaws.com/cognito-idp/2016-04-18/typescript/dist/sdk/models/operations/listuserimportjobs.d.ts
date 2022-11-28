import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListUserImportJobsXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceListUserImportJobs = "AWSCognitoIdentityProviderService.ListUserImportJobs"
}
export declare class ListUserImportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUserImportJobsXAmzTargetEnum;
}
export declare class ListUserImportJobsRequest extends SpeakeasyBase {
    headers: ListUserImportJobsHeaders;
    request: shared.ListUserImportJobsRequest;
}
export declare class ListUserImportJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listUserImportJobsResponse?: shared.ListUserImportJobsResponse;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
