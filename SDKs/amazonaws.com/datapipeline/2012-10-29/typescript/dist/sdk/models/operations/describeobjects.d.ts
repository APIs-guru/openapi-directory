import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeObjectsQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum DescribeObjectsXAmzTargetEnum {
    DataPipelineDescribeObjects = "DataPipeline.DescribeObjects"
}
export declare class DescribeObjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeObjectsXAmzTargetEnum;
}
export declare class DescribeObjectsRequest extends SpeakeasyBase {
    queryParams: DescribeObjectsQueryParams;
    headers: DescribeObjectsHeaders;
    request: shared.DescribeObjectsInput;
}
export declare class DescribeObjectsResponse extends SpeakeasyBase {
    contentType: string;
    describeObjectsOutput?: shared.DescribeObjectsOutput;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
}
