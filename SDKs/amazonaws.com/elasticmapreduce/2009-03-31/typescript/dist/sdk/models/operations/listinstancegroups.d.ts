import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListInstanceGroupsQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListInstanceGroupsXAmzTargetEnum {
    ElasticMapReduceListInstanceGroups = "ElasticMapReduce.ListInstanceGroups"
}
export declare class ListInstanceGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInstanceGroupsXAmzTargetEnum;
}
export declare class ListInstanceGroupsRequest extends SpeakeasyBase {
    queryParams: ListInstanceGroupsQueryParams;
    headers: ListInstanceGroupsHeaders;
    request: shared.ListInstanceGroupsInput;
}
export declare class ListInstanceGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listInstanceGroupsOutput?: shared.ListInstanceGroupsOutput;
    statusCode: number;
}
