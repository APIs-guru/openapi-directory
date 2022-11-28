import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStudioSessionMappingsQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListStudioSessionMappingsXAmzTargetEnum {
    ElasticMapReduceListStudioSessionMappings = "ElasticMapReduce.ListStudioSessionMappings"
}
export declare class ListStudioSessionMappingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStudioSessionMappingsXAmzTargetEnum;
}
export declare class ListStudioSessionMappingsRequest extends SpeakeasyBase {
    queryParams: ListStudioSessionMappingsQueryParams;
    headers: ListStudioSessionMappingsHeaders;
    request: shared.ListStudioSessionMappingsInput;
}
export declare class ListStudioSessionMappingsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    listStudioSessionMappingsOutput?: shared.ListStudioSessionMappingsOutput;
    statusCode: number;
}
