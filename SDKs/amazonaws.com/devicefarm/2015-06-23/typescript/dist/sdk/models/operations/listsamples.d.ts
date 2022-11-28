import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSamplesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListSamplesXAmzTargetEnum {
    DeviceFarm20150623ListSamples = "DeviceFarm_20150623.ListSamples"
}
export declare class ListSamplesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSamplesXAmzTargetEnum;
}
export declare class ListSamplesRequest extends SpeakeasyBase {
    queryParams: ListSamplesQueryParams;
    headers: ListSamplesHeaders;
    request: shared.ListSamplesRequest;
}
export declare class ListSamplesResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listSamplesResult?: shared.ListSamplesResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
