import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUniqueProblemsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListUniqueProblemsXAmzTargetEnum {
    DeviceFarm20150623ListUniqueProblems = "DeviceFarm_20150623.ListUniqueProblems"
}
export declare class ListUniqueProblemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUniqueProblemsXAmzTargetEnum;
}
export declare class ListUniqueProblemsRequest extends SpeakeasyBase {
    queryParams: ListUniqueProblemsQueryParams;
    headers: ListUniqueProblemsHeaders;
    request: shared.ListUniqueProblemsRequest;
}
export declare class ListUniqueProblemsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listUniqueProblemsResult?: shared.ListUniqueProblemsResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
