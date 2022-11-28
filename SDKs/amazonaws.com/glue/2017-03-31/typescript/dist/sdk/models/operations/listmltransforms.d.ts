import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMlTransformsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListMlTransformsXAmzTargetEnum {
    AwsGlueListMlTransforms = "AWSGlue.ListMLTransforms"
}
export declare class ListMlTransformsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMlTransformsXAmzTargetEnum;
}
export declare class ListMlTransformsRequest extends SpeakeasyBase {
    queryParams: ListMlTransformsQueryParams;
    headers: ListMlTransformsHeaders;
    request: shared.ListMlTransformsRequest;
}
export declare class ListMlTransformsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    listMlTransformsResponse?: shared.ListMlTransformsResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
