import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResourceCollectionResourceCollectionTypeEnum {
    AwsCloudFormation = "AWS_CLOUD_FORMATION",
    AwsService = "AWS_SERVICE"
}
export declare class GetResourceCollectionPathParams extends SpeakeasyBase {
    resourceCollectionType: GetResourceCollectionResourceCollectionTypeEnum;
}
export declare class GetResourceCollectionQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetResourceCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResourceCollectionRequest extends SpeakeasyBase {
    pathParams: GetResourceCollectionPathParams;
    queryParams: GetResourceCollectionQueryParams;
    headers: GetResourceCollectionHeaders;
}
export declare class GetResourceCollectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getResourceCollectionResponse?: shared.GetResourceCollectionResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
