import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiKeysQueryParams extends SpeakeasyBase {
    customerId?: string;
    includeValues?: boolean;
    limit?: number;
    name?: string;
    position?: string;
}
export declare class GetApiKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApiKeysRequest extends SpeakeasyBase {
    queryParams: GetApiKeysQueryParams;
    headers: GetApiKeysHeaders;
}
export declare class GetApiKeysResponse extends SpeakeasyBase {
    apiKeys?: shared.ApiKeys;
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
