import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStreamPathParams extends SpeakeasyBase {
    streamId: string;
}
export declare class UpdateStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateStreamRequestBody extends SpeakeasyBase {
    description?: string;
    files?: shared.StreamFile[];
    roleArn?: string;
}
export declare class UpdateStreamRequest extends SpeakeasyBase {
    pathParams: UpdateStreamPathParams;
    headers: UpdateStreamHeaders;
    request: UpdateStreamRequestBody;
}
export declare class UpdateStreamResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    updateStreamResponse?: shared.UpdateStreamResponse;
}
