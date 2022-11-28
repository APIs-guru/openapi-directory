import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateStudioSessionMappingXAmzTargetEnum {
    ElasticMapReduceCreateStudioSessionMapping = "ElasticMapReduce.CreateStudioSessionMapping"
}
export declare class CreateStudioSessionMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStudioSessionMappingXAmzTargetEnum;
}
export declare class CreateStudioSessionMappingRequest extends SpeakeasyBase {
    headers: CreateStudioSessionMappingHeaders;
    request: shared.CreateStudioSessionMappingInput;
}
export declare class CreateStudioSessionMappingResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    statusCode: number;
}
