import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetModelPathParams extends SpeakeasyBase {
    modelName: string;
    restapiId: string;
}
export declare class GetModelQueryParams extends SpeakeasyBase {
    flatten?: boolean;
}
export declare class GetModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModelRequest extends SpeakeasyBase {
    pathParams: GetModelPathParams;
    queryParams: GetModelQueryParams;
    headers: GetModelHeaders;
}
export declare class GetModelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    model?: shared.Model;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
