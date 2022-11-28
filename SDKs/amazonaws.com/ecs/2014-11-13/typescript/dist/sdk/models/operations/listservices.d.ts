import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServicesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListServicesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListServices = "AmazonEC2ContainerServiceV20141113.ListServices"
}
export declare class ListServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServicesXAmzTargetEnum;
}
export declare class ListServicesRequest extends SpeakeasyBase {
    queryParams: ListServicesQueryParams;
    headers: ListServicesHeaders;
    request: shared.ListServicesRequest;
}
export declare class ListServicesResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    listServicesResponse?: shared.ListServicesResponse;
    serverException?: any;
    statusCode: number;
}
