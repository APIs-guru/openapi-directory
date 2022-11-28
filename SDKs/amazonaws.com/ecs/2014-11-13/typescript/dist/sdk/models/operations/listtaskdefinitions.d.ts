import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTaskDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTaskDefinitionsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListTaskDefinitions = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions"
}
export declare class ListTaskDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTaskDefinitionsXAmzTargetEnum;
}
export declare class ListTaskDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListTaskDefinitionsQueryParams;
    headers: ListTaskDefinitionsHeaders;
    request: shared.ListTaskDefinitionsRequest;
}
export declare class ListTaskDefinitionsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    listTaskDefinitionsResponse?: shared.ListTaskDefinitionsResponse;
    serverException?: any;
    statusCode: number;
}
