import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDimensionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateDimensionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateDimensionRequestBodyTypeEnum {
    TopicFilter = "TOPIC_FILTER"
}
export declare class CreateDimensionRequestBody extends SpeakeasyBase {
    clientRequestToken: string;
    stringValues: string[];
    tags?: shared.Tag[];
    type: CreateDimensionRequestBodyTypeEnum;
}
export declare class CreateDimensionRequest extends SpeakeasyBase {
    pathParams: CreateDimensionPathParams;
    headers: CreateDimensionHeaders;
    request: CreateDimensionRequestBody;
}
export declare class CreateDimensionResponse extends SpeakeasyBase {
    contentType: string;
    createDimensionResponse?: shared.CreateDimensionResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
