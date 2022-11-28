import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListApplicationsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListApplicationsXAmzTargetEnum {
    CodeDeploy20141006ListApplications = "CodeDeploy_20141006.ListApplications"
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
    request: shared.ListApplicationsInput;
}
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listApplicationsOutput?: shared.ListApplicationsOutput;
    statusCode: number;
}
