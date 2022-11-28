import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAttributesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAttributesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListAttributes = "AmazonEC2ContainerServiceV20141113.ListAttributes"
}
export declare class ListAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAttributesXAmzTargetEnum;
}
export declare class ListAttributesRequest extends SpeakeasyBase {
    queryParams: ListAttributesQueryParams;
    headers: ListAttributesHeaders;
    request: shared.ListAttributesRequest;
}
export declare class ListAttributesResponse extends SpeakeasyBase {
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    listAttributesResponse?: shared.ListAttributesResponse;
    statusCode: number;
}
