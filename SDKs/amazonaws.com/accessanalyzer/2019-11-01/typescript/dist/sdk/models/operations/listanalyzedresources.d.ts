import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAnalyzedResourcesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAnalyzedResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListAnalyzedResourcesRequestBodyResourceTypeEnum {
    AwsS3Bucket = "AWS::S3::Bucket",
    AwsIamRole = "AWS::IAM::Role",
    AwsSqsQueue = "AWS::SQS::Queue",
    AwsLambdaFunction = "AWS::Lambda::Function",
    AwsLambdaLayerVersion = "AWS::Lambda::LayerVersion",
    AwsKmsKey = "AWS::KMS::Key",
    AwsSecretsManagerSecret = "AWS::SecretsManager::Secret"
}
export declare class ListAnalyzedResourcesRequestBody extends SpeakeasyBase {
    analyzerArn: string;
    maxResults?: number;
    nextToken?: string;
    resourceType?: ListAnalyzedResourcesRequestBodyResourceTypeEnum;
}
export declare class ListAnalyzedResourcesRequest extends SpeakeasyBase {
    queryParams: ListAnalyzedResourcesQueryParams;
    headers: ListAnalyzedResourcesHeaders;
    request: ListAnalyzedResourcesRequestBody;
}
export declare class ListAnalyzedResourcesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAnalyzedResourcesResponse?: shared.ListAnalyzedResourcesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
