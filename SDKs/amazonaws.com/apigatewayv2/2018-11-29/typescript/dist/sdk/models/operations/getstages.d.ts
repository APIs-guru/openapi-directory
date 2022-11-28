import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStagesPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetStagesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetStagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStagesRequest extends SpeakeasyBase {
    pathParams: GetStagesPathParams;
    queryParams: GetStagesQueryParams;
    headers: GetStagesHeaders;
}
export declare class GetStagesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getStagesResponse?: shared.GetStagesResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
