import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetStudioSessionMappingXAmzTargetEnum {
    ElasticMapReduceGetStudioSessionMapping = "ElasticMapReduce.GetStudioSessionMapping"
}
export declare class GetStudioSessionMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetStudioSessionMappingXAmzTargetEnum;
}
export declare class GetStudioSessionMappingRequest extends SpeakeasyBase {
    headers: GetStudioSessionMappingHeaders;
    request: shared.GetStudioSessionMappingInput;
}
export declare class GetStudioSessionMappingResponse extends SpeakeasyBase {
    contentType: string;
    getStudioSessionMappingOutput?: shared.GetStudioSessionMappingOutput;
    internalServerError?: any;
    invalidRequestException?: any;
    statusCode: number;
}
