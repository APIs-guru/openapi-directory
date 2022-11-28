import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReadPipelinePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ReadPipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ReadPipelineRequest extends SpeakeasyBase {
    pathParams: ReadPipelinePathParams;
    headers: ReadPipelineHeaders;
}
export declare class ReadPipelineResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    readPipelineResponse?: shared.ReadPipelineResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
