import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsPathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class GetTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTagsRequest extends SpeakeasyBase {
    pathParams: GetTagsPathParams;
    headers: GetTagsHeaders;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    getTagsResponse?: shared.GetTagsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
