import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateResourcePathParams extends SpeakeasyBase {
    resourceId: string;
    restapiId: string;
}
export declare class UpdateResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateResourceRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateResourceRequest extends SpeakeasyBase {
    pathParams: UpdateResourcePathParams;
    headers: UpdateResourceHeaders;
    request: UpdateResourceRequestBody;
}
export declare class UpdateResourceResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    resource?: shared.Resource;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
