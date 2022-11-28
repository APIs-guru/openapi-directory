import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRestApiPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class UpdateRestApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRestApiRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateRestApiRequest extends SpeakeasyBase {
    pathParams: UpdateRestApiPathParams;
    headers: UpdateRestApiHeaders;
    request: UpdateRestApiRequestBody;
}
export declare class UpdateRestApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    restApi?: shared.RestApi;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
