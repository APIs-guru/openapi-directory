import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTestsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListTestsXAmzTargetEnum {
    DeviceFarm20150623ListTests = "DeviceFarm_20150623.ListTests"
}
export declare class ListTestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestsXAmzTargetEnum;
}
export declare class ListTestsRequest extends SpeakeasyBase {
    queryParams: ListTestsQueryParams;
    headers: ListTestsHeaders;
    request: shared.ListTestsRequest;
}
export declare class ListTestsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listTestsResult?: shared.ListTestsResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
