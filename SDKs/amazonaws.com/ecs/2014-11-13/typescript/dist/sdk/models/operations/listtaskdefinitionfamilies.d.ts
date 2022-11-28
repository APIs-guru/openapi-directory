import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTaskDefinitionFamiliesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTaskDefinitionFamiliesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListTaskDefinitionFamilies = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies"
}
export declare class ListTaskDefinitionFamiliesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTaskDefinitionFamiliesXAmzTargetEnum;
}
export declare class ListTaskDefinitionFamiliesRequest extends SpeakeasyBase {
    queryParams: ListTaskDefinitionFamiliesQueryParams;
    headers: ListTaskDefinitionFamiliesHeaders;
    request: shared.ListTaskDefinitionFamiliesRequest;
}
export declare class ListTaskDefinitionFamiliesResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    listTaskDefinitionFamiliesResponse?: shared.ListTaskDefinitionFamiliesResponse;
    serverException?: any;
    statusCode: number;
}
