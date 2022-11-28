import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListInstancesQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListInstancesXAmzTargetEnum {
    ElasticMapReduceListInstances = "ElasticMapReduce.ListInstances"
}
export declare class ListInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInstancesXAmzTargetEnum;
}
export declare class ListInstancesRequest extends SpeakeasyBase {
    queryParams: ListInstancesQueryParams;
    headers: ListInstancesHeaders;
    request: shared.ListInstancesInput;
}
export declare class ListInstancesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listInstancesOutput?: shared.ListInstancesOutput;
    statusCode: number;
}
