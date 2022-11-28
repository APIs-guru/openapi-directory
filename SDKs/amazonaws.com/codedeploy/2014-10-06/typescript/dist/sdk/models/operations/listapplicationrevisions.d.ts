import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListApplicationRevisionsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListApplicationRevisionsXAmzTargetEnum {
    CodeDeploy20141006ListApplicationRevisions = "CodeDeploy_20141006.ListApplicationRevisions"
}
export declare class ListApplicationRevisionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationRevisionsXAmzTargetEnum;
}
export declare class ListApplicationRevisionsRequest extends SpeakeasyBase {
    queryParams: ListApplicationRevisionsQueryParams;
    headers: ListApplicationRevisionsHeaders;
    request: shared.ListApplicationRevisionsInput;
}
export declare class ListApplicationRevisionsResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    bucketNameFilterRequiredException?: any;
    contentType: string;
    invalidApplicationNameException?: any;
    invalidBucketNameFilterException?: any;
    invalidDeployedStateFilterException?: any;
    invalidKeyPrefixFilterException?: any;
    invalidNextTokenException?: any;
    invalidSortByException?: any;
    invalidSortOrderException?: any;
    listApplicationRevisionsOutput?: shared.ListApplicationRevisionsOutput;
    statusCode: number;
}
