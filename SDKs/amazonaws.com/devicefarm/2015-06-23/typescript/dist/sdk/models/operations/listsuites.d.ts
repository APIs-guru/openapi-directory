import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSuitesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListSuitesXAmzTargetEnum {
    DeviceFarm20150623ListSuites = "DeviceFarm_20150623.ListSuites"
}
export declare class ListSuitesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSuitesXAmzTargetEnum;
}
export declare class ListSuitesRequest extends SpeakeasyBase {
    queryParams: ListSuitesQueryParams;
    headers: ListSuitesHeaders;
    request: shared.ListSuitesRequest;
}
export declare class ListSuitesResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listSuitesResult?: shared.ListSuitesResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
