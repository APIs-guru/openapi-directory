import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateApiKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateApiKeyRequestBody extends SpeakeasyBase {
    customerId?: string;
    description?: string;
    enabled?: boolean;
    generateDistinctId?: boolean;
    name?: string;
    stageKeys?: shared.StageKey[];
    tags?: Map<string, string>;
    value?: string;
}
export declare class CreateApiKeyRequest extends SpeakeasyBase {
    headers: CreateApiKeyHeaders;
    request: CreateApiKeyRequestBody;
}
export declare class CreateApiKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
