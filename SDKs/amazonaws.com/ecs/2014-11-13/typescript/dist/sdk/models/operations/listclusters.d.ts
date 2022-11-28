import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListClustersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListClustersXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListClusters = "AmazonEC2ContainerServiceV20141113.ListClusters"
}
export declare class ListClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListClustersXAmzTargetEnum;
}
export declare class ListClustersRequest extends SpeakeasyBase {
    queryParams: ListClustersQueryParams;
    headers: ListClustersHeaders;
    request: shared.ListClustersRequest;
}
export declare class ListClustersResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    listClustersResponse?: shared.ListClustersResponse;
    serverException?: any;
    statusCode: number;
}
