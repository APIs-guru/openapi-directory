import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveTagsXAmzTargetEnum {
    ElasticMapReduceRemoveTags = "ElasticMapReduce.RemoveTags"
}
export declare class RemoveTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsXAmzTargetEnum;
}
export declare class RemoveTagsRequest extends SpeakeasyBase {
    headers: RemoveTagsHeaders;
    request: shared.RemoveTagsInput;
}
export declare class RemoveTagsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    removeTagsOutput?: Map<string, any>;
    statusCode: number;
}
