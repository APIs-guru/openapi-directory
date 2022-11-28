import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListApplicationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListApplicationsXAmzTargetEnum {
    Ec2WindowsBarleyServiceListApplications = "EC2WindowsBarleyService.ListApplications"
}
export declare class ListApplicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationsXAmzTargetEnum;
}
export declare class ListApplicationsRequest extends SpeakeasyBase {
    queryParams: ListApplicationsQueryParams;
    headers: ListApplicationsHeaders;
    request: shared.ListApplicationsRequest;
}
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listApplicationsResponse?: shared.ListApplicationsResponse;
    statusCode: number;
    validationException?: any;
}
