import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStudioSessionMappingXAmzTargetEnum {
    ElasticMapReduceDeleteStudioSessionMapping = "ElasticMapReduce.DeleteStudioSessionMapping"
}
export declare class DeleteStudioSessionMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStudioSessionMappingXAmzTargetEnum;
}
export declare class DeleteStudioSessionMappingRequest extends SpeakeasyBase {
    headers: DeleteStudioSessionMappingHeaders;
    request: shared.DeleteStudioSessionMappingInput;
}
export declare class DeleteStudioSessionMappingResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    statusCode: number;
}
