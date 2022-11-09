import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateResourcePathParams extends SpeakeasyBase {
    parentId: string;
    restapiId: string;
}
export declare class CreateResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateResourceRequestBody extends SpeakeasyBase {
    pathPart: string;
}
export declare class CreateResourceRequest extends SpeakeasyBase {
    pathParams: CreateResourcePathParams;
    headers: CreateResourceHeaders;
    request: CreateResourceRequestBody;
}
export declare class CreateResourceResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    resource?: shared.Resource;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
