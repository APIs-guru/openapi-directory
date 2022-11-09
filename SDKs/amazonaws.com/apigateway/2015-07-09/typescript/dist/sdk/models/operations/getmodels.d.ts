import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetModelsPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class GetModelsQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModelsRequest extends SpeakeasyBase {
    pathParams: GetModelsPathParams;
    queryParams: GetModelsQueryParams;
    headers: GetModelsHeaders;
}
export declare class GetModelsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    models?: shared.Models;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
