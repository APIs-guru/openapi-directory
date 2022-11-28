import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStreamPathParams extends SpeakeasyBase {
    streamId: string;
}
export declare class CreateStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamRequestBody extends SpeakeasyBase {
    description?: string;
    files: shared.StreamFile[];
    roleArn: string;
    tags?: shared.Tag[];
}
export declare class CreateStreamRequest extends SpeakeasyBase {
    pathParams: CreateStreamPathParams;
    headers: CreateStreamHeaders;
    request: CreateStreamRequestBody;
}
export declare class CreateStreamResponse extends SpeakeasyBase {
    contentType: string;
    createStreamResponse?: shared.CreateStreamResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
