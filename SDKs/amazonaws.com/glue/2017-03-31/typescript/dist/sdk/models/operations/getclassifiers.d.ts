import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClassifiersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetClassifiersXAmzTargetEnum {
    AwsGlueGetClassifiers = "AWSGlue.GetClassifiers"
}
export declare class GetClassifiersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetClassifiersXAmzTargetEnum;
}
export declare class GetClassifiersRequest extends SpeakeasyBase {
    queryParams: GetClassifiersQueryParams;
    headers: GetClassifiersHeaders;
    request: shared.GetClassifiersRequest;
}
export declare class GetClassifiersResponse extends SpeakeasyBase {
    contentType: string;
    getClassifiersResponse?: shared.GetClassifiersResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
