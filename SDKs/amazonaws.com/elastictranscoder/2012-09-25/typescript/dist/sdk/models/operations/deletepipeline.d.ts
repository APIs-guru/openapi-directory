import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePipelinePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeletePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePipelineRequest extends SpeakeasyBase {
    pathParams: DeletePipelinePathParams;
    headers: DeletePipelineHeaders;
}
export declare class DeletePipelineResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deletePipelineResponse?: Map<string, any>;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
