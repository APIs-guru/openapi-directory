import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsagePlanKeysPathParams extends SpeakeasyBase {
    usageplanId: string;
}
export declare class GetUsagePlanKeysQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    position?: string;
}
export declare class GetUsagePlanKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUsagePlanKeysRequest extends SpeakeasyBase {
    pathParams: GetUsagePlanKeysPathParams;
    queryParams: GetUsagePlanKeysQueryParams;
    headers: GetUsagePlanKeysHeaders;
}
export declare class GetUsagePlanKeysResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    usagePlanKeys?: shared.UsagePlanKeys;
}
