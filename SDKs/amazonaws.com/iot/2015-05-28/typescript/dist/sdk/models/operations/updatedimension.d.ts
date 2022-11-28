import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDimensionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class UpdateDimensionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDimensionRequestBody extends SpeakeasyBase {
    stringValues: string[];
}
export declare class UpdateDimensionRequest extends SpeakeasyBase {
    pathParams: UpdateDimensionPathParams;
    headers: UpdateDimensionHeaders;
    request: UpdateDimensionRequestBody;
}
export declare class UpdateDimensionResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateDimensionResponse?: shared.UpdateDimensionResponse;
}
