import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateStudioSessionMappingXAmzTargetEnum {
    ElasticMapReduceUpdateStudioSessionMapping = "ElasticMapReduce.UpdateStudioSessionMapping"
}
export declare class UpdateStudioSessionMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStudioSessionMappingXAmzTargetEnum;
}
export declare class UpdateStudioSessionMappingRequest extends SpeakeasyBase {
    headers: UpdateStudioSessionMappingHeaders;
    request: shared.UpdateStudioSessionMappingInput;
}
export declare class UpdateStudioSessionMappingResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    statusCode: number;
}
