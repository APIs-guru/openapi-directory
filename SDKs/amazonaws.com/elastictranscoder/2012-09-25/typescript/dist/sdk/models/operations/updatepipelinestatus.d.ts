import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePipelineStatusPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdatePipelineStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdatePipelineStatusRequestBody extends SpeakeasyBase {
    status: string;
}
export declare class UpdatePipelineStatusRequest extends SpeakeasyBase {
    pathParams: UpdatePipelineStatusPathParams;
    headers: UpdatePipelineStatusHeaders;
    request: UpdatePipelineStatusRequestBody;
}
export declare class UpdatePipelineStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updatePipelineStatusResponse?: shared.UpdatePipelineStatusResponse;
    validationException?: any;
}
