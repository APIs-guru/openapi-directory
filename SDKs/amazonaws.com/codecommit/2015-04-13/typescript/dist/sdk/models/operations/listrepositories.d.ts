import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRepositoriesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListRepositoriesXAmzTargetEnum {
    CodeCommit20150413ListRepositories = "CodeCommit_20150413.ListRepositories"
}
export declare class ListRepositoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRepositoriesXAmzTargetEnum;
}
export declare class ListRepositoriesRequest extends SpeakeasyBase {
    queryParams: ListRepositoriesQueryParams;
    headers: ListRepositoriesHeaders;
    request: shared.ListRepositoriesInput;
}
export declare class ListRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    invalidContinuationTokenException?: any;
    invalidOrderException?: any;
    invalidSortByException?: any;
    listRepositoriesOutput?: shared.ListRepositoriesOutput;
    statusCode: number;
}
